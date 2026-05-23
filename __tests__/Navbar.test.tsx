import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '@/components/Navbar';

// Mock next/navigation
const mockPathname = vi.fn(() => '/');
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname(),
}));

describe('Navbar', () => {
  beforeEach(() => {
    mockPathname.mockReturnValue('/');
  });

  it('renders a nav element with correct aria-label', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: 'Navigation principale' });
    expect(nav).toBeInTheDocument();
  });

  it('renders the company name linking to home', () => {
    render(<Navbar />);
    const companyLink = screen.getByText('Cabinet de Gestion et Conseil');
    expect(companyLink).toBeInTheDocument();
    expect(companyLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Accueil').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('À propos').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1);
  });

  it('highlights the active link with gold color and border', () => {
    mockPathname.mockReturnValue('/services');
    render(<Navbar />);
    // Find the desktop link for Services
    const serviceLinks = screen.getAllByText('Services');
    const desktopLink = serviceLinks[0].closest('a');
    expect(desktopLink).toHaveClass('text-gold-text');
    expect(desktopLink).toHaveClass('border-b-2');
    expect(desktopLink).toHaveClass('border-gold');
  });

  it('does not highlight inactive links', () => {
    mockPathname.mockReturnValue('/');
    render(<Navbar />);
    const aboutLinks = screen.getAllByText('À propos');
    const desktopLink = aboutLinks[0].closest('a');
    expect(desktopLink).not.toHaveClass('text-gold-text');
    expect(desktopLink).toHaveClass('text-dark');
  });

  it('has sticky positioning with z-50', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: 'Navigation principale' });
    expect(nav).toHaveClass('sticky', 'top-0', 'z-50');
  });

  it('has minimum height of 70px', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: 'Navigation principale' });
    expect(nav).toHaveClass('min-h-[70px]');
  });

  describe('Mobile menu', () => {
    it('renders a hamburger button with aria-expanded=false initially', () => {
      render(<Navbar />);
      const button = screen.getByRole('button', { name: /menu/i });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('aria-controls', 'mobile-menu');
    });

    it('toggles aria-expanded when hamburger is clicked', () => {
      render(<Navbar />);
      const button = screen.getByRole('button', { name: /menu/i });
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('shows mobile menu panel when hamburger is clicked', () => {
      render(<Navbar />);
      const button = screen.getByRole('button', { name: /menu/i });
      // Mobile menu should not be visible initially
      expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
      fireEvent.click(button);
      expect(document.getElementById('mobile-menu')).toBeInTheDocument();
    });

    it('closes mobile menu when a link is clicked', () => {
      render(<Navbar />);
      const button = screen.getByRole('button', { name: /menu/i });
      fireEvent.click(button);
      // Click a link in the mobile menu
      const mobileMenu = document.getElementById('mobile-menu')!;
      const link = mobileMenu.querySelector('a')!;
      fireEvent.click(link);
      expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
    });

    it('hamburger button has minimum touch target size', () => {
      render(<Navbar />);
      const button = screen.getByRole('button', { name: /menu/i });
      expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
    });
  });
});
