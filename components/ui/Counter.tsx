'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  target,
  suffix,
  label,
  duration = 2000,
  className,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animate = useCallback(() => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOut curve: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * target);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(target);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animate, hasAnimated, target]);

  return (
    <div ref={ref} className={`text-center ${className ?? ''}`}>
      <div className="text-4xl md:text-5xl font-bold text-gold" aria-live="polite">
        {count}
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-sm md:text-base text-dark/70 mt-2 font-medium">
        {label}
      </p>
    </div>
  );
}
