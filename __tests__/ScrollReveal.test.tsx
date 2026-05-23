import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ScrollReveal from '@/components/ui/ScrollReveal';

// Mock IntersectionObserver
let intersectionCallback: IntersectionObserverCallback;
let mockObserve: ReturnType<typeof vi.fn>;
let mockDisconnect: ReturnType<typeof vi.fn>;

beforeEach(() => {
  mockObserve = vi.fn();
  mockDisconnect = vi.fn();

  // Use a class to properly mock IntersectionObserver (it's called with `new`)
  class MockIntersectionObserver {
    constructor(callback: IntersectionObserverCallback) {
      intersectionCallback = callback;
    }
    observe = mockObserve;
    disconnect = mockDisconnect;
    unobserve = vi.fn();
    root = null;
    rootMargin = '';
    thresholds = [];
    takeRecords = vi.fn();
  }

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

  // Default: no reduced motion preference
  vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
    matches: false,
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

describe('ScrollReveal', () => {
  it('renders children correctly', () => {
    render(
      <ScrollReveal>
        <p>Hello World</p>
      </ScrollReveal>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('starts with opacity 0 and translateY(20px) when not yet visible', () => {
    render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );
    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper).toHaveStyle({ opacity: '0' });
    expect(wrapper).toHaveStyle({ transform: 'translateY(20px)' });
  });

  it('becomes visible with opacity 1 and translateY(0) after intersection', () => {
    render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );

    // Simulate intersection
    act(() => {
      intersectionCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper).toHaveStyle({ opacity: '1' });
    expect(wrapper).toHaveStyle({ transform: 'translateY(0)' });
  });

  it('disconnects observer after first intersection (trigger once)', () => {
    render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );

    act(() => {
      intersectionCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('applies transition-delay based on delay prop', () => {
    render(
      <ScrollReveal delay={200}>
        <p>Delayed Content</p>
      </ScrollReveal>
    );

    const wrapper = screen.getByText('Delayed Content').parentElement;
    expect(wrapper).toHaveStyle({ transitionDelay: '200ms' });
  });

  it('applies custom className', () => {
    render(
      <ScrollReveal className="custom-class">
        <p>Styled Content</p>
      </ScrollReveal>
    );

    const wrapper = screen.getByText('Styled Content').parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('uses 500ms transition duration', () => {
    render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );

    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper?.style.transition).toContain('500ms');
  });

  it('does not trigger animation when entry is not intersecting', () => {
    render(
      <ScrollReveal>
        <p>Content</p>
      </ScrollReveal>
    );

    act(() => {
      intersectionCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    const wrapper = screen.getByText('Content').parentElement;
    expect(wrapper).toHaveStyle({ opacity: '0' });
  });

  describe('prefers-reduced-motion', () => {
    it('shows content immediately without animation when prefers-reduced-motion is set', () => {
      // Override matchMedia to return reduced motion preference
      vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })));

      render(
        <ScrollReveal>
          <p>Accessible Content</p>
        </ScrollReveal>
      );

      const wrapper = screen.getByText('Accessible Content').parentElement;
      // Should not have animation styles
      expect(wrapper?.style.opacity).toBeFalsy();
      expect(wrapper?.style.transform).toBeFalsy();
    });

    it('does not set up IntersectionObserver when prefers-reduced-motion is set', () => {
      vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })));

      render(
        <ScrollReveal>
          <p>Content</p>
        </ScrollReveal>
      );

      expect(mockObserve).not.toHaveBeenCalled();
    });
  });
});
