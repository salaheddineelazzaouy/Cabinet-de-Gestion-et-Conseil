'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialSlider({
  testimonials,
  className,
}: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-advance every 5 seconds (disabled if reduced motion or paused)
  useEffect(() => {
    if (prefersReducedMotion || isPaused || testimonials.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(goToNext, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [prefersReducedMotion, isPaused, goToNext, testimonials.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrev();
      }
    },
    [goToNext, goToPrev]
  );

  // Handle empty array gracefully
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const current = testimonials[activeIndex];

  return (
    <div
      ref={containerRef}
      className={`max-w-3xl mx-auto text-center ${className ?? ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(e) => {
        // Only unpause if focus leaves the container entirely
        if (!containerRef.current?.contains(e.relatedTarget as Node)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Témoignages clients"
      tabIndex={0}
    >
      {/* Quote icon */}
      <div className="flex justify-center mb-6" aria-hidden="true">
        <svg
          className="w-12 h-12 text-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 7.05C7.28 7.56 4.5 10.78 4.5 14.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.65-1.15-3.03-2.69-3.4.41-1.56 1.6-2.87 3.19-3.42L11 7.05zM19.5 7.05c-3.72.51-6.5 3.73-6.5 7.45 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.65-1.15-3.03-2.69-3.4.41-1.56 1.6-2.87 3.19-3.42l-1-.63z" />
        </svg>
      </div>

      {/* Testimonial content */}
      <div
        aria-live="polite"
        aria-atomic="true"
      >
        <blockquote className="text-body-lg italic text-dark/80 mb-6 leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </blockquote>
        <div className="mt-4">
          <p className="font-semibold text-dark text-lg">{current.name}</p>
          <p className="text-dark/60 text-sm">
            {current.role}
            {current.company && ` — ${current.company}`}
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-1 mt-8" role="tablist" aria-label="Sélectionner un témoignage">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Témoignage ${index + 1} sur ${testimonials.length}`}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            onClick={() => goToSlide(index)}
            tabIndex={index === activeIndex ? 0 : -1}
          >
            <span
              className={`w-3 h-3 rounded-full transition-colors duration-250 ${
                index === activeIndex
                  ? 'bg-gold'
                  : 'bg-dark/20 hover:bg-dark/40'
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
