import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import AboutPage from '@/app/about/page';
import { company } from '@/data/company';

beforeEach(() => {
  // Mock IntersectionObserver
  class MockIntersectionObserver {
    constructor(_callback: IntersectionObserverCallback) {}
    observe = vi.fn();
    disconnect = vi.fn();
    unobserve = vi.fn();
    root = null;
    rootMargin = '';
    thresholds = [];
    takeRecords = vi.fn();
  }
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

  // Mock matchMedia — simulate prefers-reduced-motion so content renders immediately
  vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('About Page', () => {
  it('renders the page banner heading', () => {
    render(<AboutPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('À propos');
  });

  it('renders the mission section with SectionTitle and text', () => {
    render(<AboutPage />);
    // SectionTitle renders label as span and heading as h2
    expect(screen.getByText('Notre Mission')).toBeInTheDocument();
    const missionHeading = screen.getByRole('heading', { name: /Ce qui nous anime/i });
    expect(missionHeading).toBeInTheDocument();
    expect(missionHeading.tagName).toBe('H2');
    expect(screen.getByText(company.mission)).toBeInTheDocument();
  });

  it('renders the vision section with SectionTitle and text', () => {
    render(<AboutPage />);
    expect(screen.getByText('Notre Vision')).toBeInTheDocument();
    const visionHeading = screen.getByRole('heading', { name: /Là où nous allons/i });
    expect(visionHeading).toBeInTheDocument();
    expect(visionHeading.tagName).toBe('H2');
    expect(screen.getByText(company.vision)).toBeInTheDocument();
  });

  it('renders the values section with SectionTitle', () => {
    render(<AboutPage />);
    expect(screen.getByText('Nos Valeurs')).toBeInTheDocument();
    const valuesHeading = screen.getByRole('heading', { name: /Les principes qui nous guident/i });
    expect(valuesHeading).toBeInTheDocument();
    expect(valuesHeading.tagName).toBe('H2');
  });

  it('renders all four core values with titles and descriptions', () => {
    render(<AboutPage />);
    company.values.forEach((value) => {
      const title = screen.getByRole('heading', { name: value.title });
      expect(title).toBeInTheDocument();
      expect(title.tagName).toBe('H3');
      expect(screen.getByText(value.description)).toBeInTheDocument();
    });
  });

  it('renders values in a responsive grid layout', () => {
    render(<AboutPage />);
    const valuesHeading = screen.getByRole('heading', { name: /Les principes qui nous guident/i });
    const section = valuesHeading.closest('section');
    const grid = section?.querySelector('.grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
    expect(grid).toHaveClass('gap-8');
  });

  it('exports page-specific metadata', async () => {
    const { metadata } = await import('@/app/about/page');
    expect(metadata).toBeDefined();
    expect(metadata.title).toBe('À propos');
    expect(metadata.description).toBeDefined();
    expect((metadata.description as string).length).toBeLessThanOrEqual(160);
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.alternates?.canonical).toBeDefined();
  });
});
