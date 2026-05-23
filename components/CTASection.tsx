import Link from 'next/link';

interface CTASectionProps {
  heading: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'dark' | 'gold';
  className?: string;
}

export default function CTASection({
  heading,
  description,
  buttonText,
  buttonHref,
  variant = 'dark',
  className = '',
}: CTASectionProps) {
  const sectionStyles =
    variant === 'dark'
      ? 'bg-dark text-white'
      : 'bg-gold text-dark';

  const buttonStyles =
    variant === 'dark'
      ? 'bg-gold hover:bg-gold-light text-dark font-semibold'
      : 'bg-dark hover:bg-dark-light text-white font-semibold';

  return (
    <section className={`w-full py-16 md:py-20 ${sectionStyles} ${className}`}>
      <div className="max-w-container mx-auto px-4 md:px-container-padding text-center">
        <h2 className="font-serif text-heading-lg md:text-heading-xl mb-4">
          {heading}
        </h2>

        {description && (
          <p className="text-body-lg max-w-2xl mx-auto mb-8 opacity-90">
            {description}
          </p>
        )}

        <Link
          href={buttonHref}
          className={`inline-flex items-center justify-center px-8 py-3 rounded-button transition-all duration-250 min-w-[44px] min-h-[44px] ${buttonStyles}`}
        >
          {buttonText}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
