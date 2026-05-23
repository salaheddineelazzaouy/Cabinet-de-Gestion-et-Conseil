import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#D4B44A',
          dark: '#A8871F',
          text: '#7A6515', // Accessible gold for text on white (4.5:1+ contrast ratio)
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
        },
      },
      fontSize: {
        'heading-xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],       // 48px
        'heading-lg': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],   // 36px
        'heading-md': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],       // 32px
        'subheading': ['1.375rem', { lineHeight: '1.4', fontWeight: '600' }],   // 22px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],             // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],      // 18px
      },
      spacing: {
        'section': '80px',
        'component-gap': '32px',
        'container-padding': '24px',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'button': '6px',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
};

export default config;
