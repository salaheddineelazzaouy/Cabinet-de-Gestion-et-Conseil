import React from 'react';
import Link from 'next/link';

export interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  href?: string;
  compact?: boolean;
}

const icons: Record<string, React.ReactNode> = {
  calculator: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="10" y2="18" />
      <line x1="14" y1="18" x2="16" y2="18" />
    </svg>
  ),
  scale: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M5 7l7-4 7 4" />
      <path d="M5 7l-1 5h6L9 7" />
      <path d="M19 7l-1 5h-6l1-5" />
      <circle cx="5" cy="12" r="0.5" />
      <circle cx="19" cy="12" r="0.5" />
    </svg>
  ),
  'clipboard-check': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 2h6v2H9z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  building: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="22" x2="9" y2="18" />
      <line x1="15" y1="22" x2="15" y2="18" />
      <rect x="8" y="6" width="3" height="3" />
      <rect x="13" y="6" width="3" height="3" />
      <rect x="8" y="12" width="3" height="3" />
      <rect x="13" y="12" width="3" height="3" />
    </svg>
  ),
  'graduation-cap': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M2 9v6" />
      <path d="M6 11.5v5.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    </svg>
  ),
  settings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

const iconLabels: Record<string, string> = {
  calculator: 'Icône comptabilité',
  scale: 'Icône conseil juridique',
  'clipboard-check': 'Icône audit et contrôle',
  building: 'Icône création d\'entreprise',
  'graduation-cap': 'Icône formation',
  settings: 'Icône organisation',
};

export default function ServiceCard({
  title,
  description,
  benefits,
  icon,
  href,
  compact = false,
}: ServiceCardProps) {
  const iconElement = icons[icon] || icons['calculator'];
  const ariaLabel = iconLabels[icon] || `Icône ${title}`;
  const linkHref = href || '/services';

  return (
    <article className="group w-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-250 flex flex-col">
      {/* Icon Box - 80x80px with gold background and opacity */}
      <div
        className="w-20 h-20 flex items-center justify-center rounded-lg bg-gold/10 text-gold-dark group-hover:bg-gold/20 group-hover:text-gold transition-all duration-250 mb-5"
        role="img"
        aria-label={ariaLabel}
      >
        {iconElement}
      </div>

      {/* Title - serif font */}
      <h3 className="font-serif text-xl font-bold text-dark mb-3">{title}</h3>

      {/* Description - truncated in compact mode */}
      <p
        className={`text-body text-dark/80 mb-4 ${
          compact ? 'line-clamp-3' : ''
        }`}
      >
        {description}
      </p>

      {/* Benefits list - only shown in detailed mode (services page) */}
      {!compact && benefits.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mb-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-body text-dark/70">
              {benefit}
            </li>
          ))}
        </ul>
      )}

      {/* "Voir" link with arrow - positioned at bottom */}
      <div className="mt-auto pt-4">
        <Link
          href={linkHref}
          aria-label={`Voir le service : ${title}`}
          className="inline-flex items-center gap-1 min-h-[44px] min-w-[44px] text-gold-text font-medium hover:text-gold-dark transition-colors duration-250"
        >
          Voir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
