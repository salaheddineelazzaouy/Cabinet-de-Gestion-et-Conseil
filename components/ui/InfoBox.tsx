import React from 'react';

export interface InfoBoxProps {
  icon: 'location' | 'email' | 'phone' | 'clock';
  title: string;
  content: string | string[];
  href?: string;
  className?: string;
}

function IconSvg({ icon }: { icon: InfoBoxProps['icon'] }) {
  switch (icon) {
    case 'location':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'email':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'phone':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'clock':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
  }
}

export default function InfoBox({
  icon,
  title,
  content,
  href,
  className = '',
}: InfoBoxProps) {
  const contentLines = Array.isArray(content) ? content : [content];

  const renderedContent = (
    <div className="text-gray-600 text-body">
      {contentLines.map((line, index) => (
        <p key={index} className={index > 0 ? 'mt-1' : ''}>
          {line}
        </p>
      ))}
    </div>
  );

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-6 transition-shadow duration-250 hover:shadow-lg ${className}`}
    >
      {/* Icon circle */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gold text-gold mb-4">
        <IconSvg icon={icon} />
      </div>

      {/* Title */}
      <h3 className="font-bold text-dark text-lg mb-2">{title}</h3>

      {/* Content - optionally wrapped in link */}
      {href ? (
        <a
          href={href}
          aria-label={`${title} : ${contentLines[0]}`}
          className="text-gray-600 hover:text-gold transition-colors duration-250 min-h-[44px] inline-flex items-center"
        >
          {renderedContent}
        </a>
      ) : (
        renderedContent
      )}
    </div>
  );
}
