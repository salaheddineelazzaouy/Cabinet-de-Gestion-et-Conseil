'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navigation principale"
      className={`sticky top-0 z-50 min-h-[70px] transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-container-padding py-4">
        {/* Company name - serif font, larger branding */}
        <Link
          href="/"
          className="min-h-[44px] min-w-[44px] flex items-center font-serif text-xl md:text-2xl font-bold text-dark"
        >
          Cabinet de Gestion et Conseil
        </Link>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`min-h-[44px] min-w-[44px] flex items-center px-2 py-2 font-sans text-body font-medium transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark rounded-sm ${
                    isActive
                      ? 'text-gold-text border-b-2 border-gold'
                      : 'text-dark hover:text-gold-text'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded p-2 text-dark hover:text-gold-text transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu de navigation"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <ul className="flex flex-col px-container-padding py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`min-h-[44px] min-w-[44px] flex items-center px-2 py-2 font-sans text-body font-medium transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark rounded-sm ${
                      isActive
                        ? 'text-gold-text border-b-2 border-gold'
                        : 'text-dark hover:text-gold-text'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
