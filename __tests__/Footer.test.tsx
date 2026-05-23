import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer';
import { footerColumns } from '@/data/navigation';

describe('Footer', () => {
  it('renders as a semantic footer element with aria-label', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('aria-label', 'Pied de page');
  });

  it('displays the company name with gold styling', () => {
    render(<Footer />);
    const companyName = screen.getByText('Cabinet de Gestion et Conseil');
    expect(companyName).toBeInTheDocument();
    expect(companyName).toHaveClass('text-gold');
    expect(companyName).toHaveClass('font-bold');
  });

  it('displays copyright with the current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const copyright = screen.getByText(`© ${year} Cabinet de Gestion et Conseil. Tous droits réservés.`);
    expect(copyright).toBeInTheDocument();
  });

  it('renders navigation links from footer columns data', () => {
    render(<Footer />);
    // Footer has separate nav sections per column
    const servicesNav = screen.getByRole('navigation', { name: `Liens ${footerColumns[0].title}` });
    expect(servicesNav).toBeInTheDocument();

    const cabinetNav = screen.getByRole('navigation', { name: `Liens ${footerColumns[1].title}` });
    expect(cabinetNav).toBeInTheDocument();

    // Verify all links from footer columns are rendered
    footerColumns.forEach((column) => {
      column.links.forEach((link) => {
        const renderedLink = screen.getByRole('link', { name: link.label });
        expect(renderedLink).toBeInTheDocument();
        expect(renderedLink).toHaveAttribute('href', link.href);
      });
    });
  });

  it('styles navigation links with hover:text-gold transition', () => {
    render(<Footer />);
    // Get links from the service column
    const links = screen.getAllByRole('link').filter(
      (link) => link.classList.contains('hover:text-gold')
    );
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveClass('transition-colors');
      expect(link).toHaveClass('duration-200');
    });
  });

  it('applies dark background styling', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-dark');
    expect(footer).toHaveClass('text-white');
  });

  it('renders contact information with phone and email links', () => {
    render(<Footer />);
    const phoneLink = screen.getByRole('link', { name: /Appeler le/ });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'));

    const emailLink = screen.getByRole('link', { name: /Envoyer un email/ });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});
