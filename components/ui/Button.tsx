'use client';

import React from 'react';

export interface ButtonProps {
  variant: 'primary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  className?: string;
}

export default function Button({
  variant,
  children,
  href,
  onClick,
  type = 'button',
  ariaLabel,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-button font-semibold transition-all duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gold-dark text-white hover:bg-dark hover:shadow-md'
      : 'border-2 border-gold-dark bg-transparent text-gold-text hover:bg-gold-dark hover:text-white';

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        role="button"
        aria-label={ariaLabel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
