# Implementation Plan: Consulting Firm Website

## Overview

This plan implements the "Cabinet de Gestion et Conseil" corporate website — a premium, fully static Next.js 14 site with four pages (Home, About, Services, Contact), a gold-and-white luxury visual identity, Tailwind CSS styling, and no backend dependencies. The implementation follows an incremental approach: project setup → shared components → data layer → pages → SEO/accessibility → final integration.

## Tasks

- [x] 1. Set up project structure and configuration
  - [x] 1.1 Initialize Next.js 14 project with TypeScript and Tailwind CSS
    - Run `npx create-next-app` with TypeScript, Tailwind CSS, App Router, and ESLint
    - Configure `next.config.js` with `output: 'export'` for static site generation
    - Set up `tailwind.config.ts` with custom theme: gold color (#C9A227), dark text (#1A1A1A), font scale (32px+ headings, 22px+ subheadings, 16px+ body), spacing (48px section gaps, 24px padding)
    - Configure `tsconfig.json` with strict mode enabled
    - Create directory structure: `components/ui/`, `components/`, `data/`, `public/images/`, `styles/`
    - _Requirements: 1.1, 1.2, 1.3, 8.1, 8.2, 8.3, 8.4_

  - [x] 1.2 Set up global styles and CSS variables
    - Create `styles/globals.css` with Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
    - Add CSS custom properties for gold theme, typography scale, and spacing
    - Add `scroll-behavior: smooth` for in-page navigation
    - Add `prefers-reduced-motion` media query to disable non-essential animations
    - _Requirements: 8.1, 8.2, 8.5, 8.8, 12.2_

  - [x] 1.3 Set up testing framework with Vitest and React Testing Library
    - Install and configure Vitest, `@testing-library/react`, `@testing-library/jest-dom`, and `vitest-axe`
    - Create `vitest.config.ts` with jsdom environment and path aliases
    - Add test scripts to `package.json`
    - _Requirements: 1.1_

- [x] 2. Implement static data layer
  - [x] 2.1 Create navigation data file
    - Create `data/navigation.ts` with `NavLink` interface and `navLinks` array (Accueil, À propos, Services, Contact)
    - _Requirements: 2.2, 7.3_

  - [x] 2.2 Create company data file
    - Create `data/company.ts` with `CompanyData` and `CompanyValue` interfaces
    - Define company name, mission statement, vision statement, and four core values (Confiance, Précision, Conformité, Excellence) each with title and two-sentence description
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 2.3 Create services data file
    - Create `data/services.ts` with `Service` interface
    - Define six services (Comptabilité, Conseil Juridique/Fiscal/Financier/RH, Audit/Contrôle/Gestion, Création et Domiciliation, Formation, Organisation et Procédures) each with id, title, description (2+ sentences), benefits (3-6 items), and icon identifier
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 3. Implement shared UI components
  - [x] 3.1 Implement Button component
    - Create `components/ui/Button.tsx` with `ButtonProps` interface (variant, children, href, onClick, type, ariaLabel, className)
    - Render `<a>` with `role="button"` when `href` is provided, `<button>` otherwise
    - Implement primary variant (gold background, white text) and outline variant (2px gold border, transparent background, gold text)
    - Apply hover transition (200-300ms), focus indicator (2px outline offset), padding (min 12px vertical, 24px horizontal), border-radius (6px)
    - Ensure accessible label via visible text or `aria-label`
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_

  - [ ]* 3.2 Write unit tests for Button component
    - Test renders as `<a>` when href provided and `<button>` when not
    - Test primary and outline variant styling
    - Test accessible attributes (aria-label, role)
    - Test focus indicator visibility
    - Run axe-core accessibility check
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6_

  - [x] 3.3 Implement SectionWrapper component
    - Create `components/ui/SectionWrapper.tsx` with `SectionWrapperProps` interface (children, className, id)
    - Render as `<section>` element with max-width 1280px, auto horizontal margins
    - Apply consistent vertical padding (min 48px), horizontal padding (min 24px desktop, 16px mobile)
    - _Requirements: 1.4, 8.2, 8.4, 9.1_

  - [x] 3.4 Implement ScrollReveal component
    - Create `components/ui/ScrollReveal.tsx` as a client component (`'use client'`)
    - Use Intersection Observer to detect viewport entry
    - Apply fade-in + translateY animation (200-500ms duration)
    - Support stagger delay prop
    - Respect `prefers-reduced-motion`: disable animation when set (content visible immediately)
    - Trigger once only (no re-animation on scroll back)
    - _Requirements: 3.7, 4.6, 8.5, 8.8_

  - [x] 3.5 Implement ServiceCard component
    - Create `components/ServiceCard.tsx` with `ServiceCardProps` interface (title, description, benefits, icon)
    - Render as `<article>` with heading, icon, description paragraph, and bulleted benefits list
    - Apply hover animation: scale(1.02) or elevated shadow with 200-300ms transition
    - Implement responsive sizing: full-width mobile, half tablet, third desktop
    - Ensure non-empty alt text or aria-label on icon
    - _Requirements: 5.1, 5.3, 5.4, 5.5, 11.2_

  - [ ]* 3.6 Write unit tests for ServiceCard component
    - Test renders title, description, benefits list, and icon
    - Test hover classes are applied
    - Test semantic HTML (article element, heading)
    - Test accessible icon attributes
    - Run axe-core accessibility check
    - _Requirements: 5.3, 5.4, 11.2_

- [x] 4. Implement Navbar component
  - [x] 4.1 Implement Navbar with desktop and mobile views
    - Create `components/Navbar.tsx` as a client component
    - Render as `<nav aria-label="Navigation principale">` with sticky positioning (`sticky top-0 z-50`)
    - Display company name and navigation links from `data/navigation.ts`
    - Highlight active link with gold color (#C9A227) and underline/bottom border
    - Implement mobile menu toggle (below 768px): hamburger button with `aria-expanded` and `aria-controls`
    - Render mobile panel with vertical link layout, close on link selection
    - Ensure min height 56px, all touch targets min 44x44px
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 11.1_

  - [ ]* 4.2 Write unit tests for Navbar component
    - Test renders all navigation links
    - Test active link highlighting
    - Test mobile menu toggle (aria-expanded state changes)
    - Test mobile menu closes on link click
    - Test semantic nav element and aria attributes
    - Run axe-core accessibility check
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [x] 5. Implement Footer component
  - [x] 5.1 Implement Footer with navigation and branding
    - Create `components/Footer.tsx`
    - Render as `<footer>` element with appropriate ARIA attributes
    - Display company name "Cabinet de Gestion et Conseil" and copyright with dynamic year
    - Include navigation links matching Navbar destinations from `data/navigation.ts`
    - Style links and company name with gold accent (#C9A227)
    - Apply hover transition on links (150-300ms)
    - Ensure footer is pushed to bottom on short-content pages (flex layout)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [ ]* 5.2 Write unit tests for Footer component
    - Test renders company name and copyright year
    - Test renders all navigation links matching Navbar
    - Test semantic footer element
    - Test gold accent styling on links
    - Run axe-core accessibility check
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 6. Implement Root Layout
  - [x] 6.1 Create root layout with Navbar, Footer, and global metadata
    - Create `app/layout.tsx` with Navbar and Footer wrapping `{children}`
    - Use flex column layout with min-h-screen to push footer to bottom
    - Wrap main content in `<main>` element
    - Set default metadata (site-wide title template, base OpenGraph config)
    - Import global styles
    - _Requirements: 1.5, 2.1, 7.1, 10.3, 12.1_

- [x] 7. Checkpoint - Verify shared components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Implement Home page
  - [x] 8.1 Create Home page with all sections
    - Create `app/page.tsx` with sections in order: Hero, Introduction, Services Overview, Why Choose Us, CTA
    - **Hero section**: headline, subheadline, primary CTA button linking to `/contact`
    - **Introduction section**: firm expertise summary paragraph
    - **Services Overview section**: six ServiceCard components (from `data/services.ts`) linking to `/services`
    - **Why Choose Us section**: at least four key differentiators
    - **Final CTA section**: primary button linking to `/contact`
    - Wrap each section in SectionWrapper and ScrollReveal for fade-in animations
    - Export page-specific metadata (unique title ≤60 chars, description ≤160 chars, OpenGraph tags, canonical URL)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 10.1, 10.2, 10.5, 10.6_

  - [ ]* 8.2 Write unit tests for Home page
    - Test all sections render in correct order
    - Test Hero contains headline, subheadline, and CTA button
    - Test Services Overview renders six ServiceCard components
    - Test Why Choose Us renders at least four differentiators
    - Test metadata is correctly exported
    - Run axe-core accessibility check
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 9. Implement About page
  - [x] 9.1 Create About page with mission, vision, and values
    - Create `app/about/page.tsx`
    - Render mission statement as distinct section with heading
    - Render vision statement as distinct section with heading
    - Render four core values (from `data/company.ts`) in responsive grid: 1 col mobile, 2 col tablet, 4 col desktop
    - Each value displays title and descriptive paragraph (2+ sentences)
    - Wrap sections in SectionWrapper and ScrollReveal
    - Export page-specific metadata (unique title, description, OpenGraph, canonical)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 10.1, 10.2, 10.6_

  - [ ]* 9.2 Write unit tests for About page
    - Test mission and vision sections render with headings
    - Test all four values render with titles and descriptions
    - Test responsive grid classes
    - Test metadata export
    - Run axe-core accessibility check
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 10. Implement Services page
  - [x] 10.1 Create Services page with service cards grid
    - Create `app/services/page.tsx`
    - Render six ServiceCard components from `data/services.ts`
    - Arrange in responsive grid: 1 col below 768px, 2 col 768-1023px, 3 col 1024px+
    - Wrap in SectionWrapper and ScrollReveal
    - Export page-specific metadata (unique title, description, OpenGraph, canonical)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 10.1, 10.2, 10.6_

  - [ ]* 10.2 Write unit tests for Services page
    - Test renders exactly six service cards
    - Test each card has title, description, benefits, and icon
    - Test responsive grid classes
    - Test metadata export
    - Run axe-core accessibility check
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 11. Implement Contact page
  - [x] 11.1 Create Contact page with form and contact info
    - Create `app/contact/page.tsx`
    - Render static contact form with fields: name, email, subject, message
    - Apply HTML5 validation: `type="email"` on email field, `required` on name/email/message, `aria-required` on mandatory fields
    - Associate labels with inputs via `for`/`id` pattern
    - Render submit-styled primary Button (gold theme, no actual submission)
    - Display placeholder contact information (address, email, phone) in adjacent section
    - Wrap in SectionWrapper
    - Export page-specific metadata (unique title, description, OpenGraph, canonical)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 10.1, 10.2, 10.6, 11.1, 11.5_

  - [ ]* 11.2 Write unit tests for Contact page
    - Test form renders all fields with correct types and attributes
    - Test labels are associated with inputs (for/id)
    - Test required and aria-required attributes
    - Test submit button renders with gold theme
    - Test contact info section renders
    - Test no form action attribute (static only)
    - Run axe-core accessibility check
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [x] 12. Checkpoint - Verify all pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. SEO, accessibility, and performance finalization
  - [x] 13.1 Verify semantic HTML and heading hierarchy across all pages
    - Ensure each page has a single `h1`, logical `h2`-`h6` nesting with no skipped levels
    - Verify semantic elements used: `header`, `nav`, `main`, `section`, `article`, `footer`
    - Verify all internal links use `<a>` with `href` attributes
    - Verify all informative images/icons have alt text or aria-label; decorative images have empty alt or `aria-hidden="true"`
    - _Requirements: 10.3, 10.4, 10.5, 11.2_

  - [x] 13.2 Implement custom 404 page
    - Create `app/not-found.tsx` with navigation back to Home
    - Style consistently with site theme
    - _Requirements: 1.5, 10.4_

  - [x] 13.3 Verify color contrast and focus indicators
    - Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text
    - Ensure all interactive elements have visible focus indicators (min 2px, 3:1 contrast)
    - Ensure keyboard focus follows logical reading order with no focus traps
    - _Requirements: 11.3, 11.4, 11.6_

  - [x] 13.4 Add lazy loading for below-the-fold images
    - Apply `loading="lazy"` attribute on images below the fold
    - Ensure above-the-fold images (Hero) load eagerly
    - _Requirements: 12.5_

- [x] 14. Final build verification and static export
  - [x] 14.1 Run static build and verify output
    - Execute `next build` and confirm static export completes without errors
    - Verify output directory contains only HTML, CSS, JS, and image assets
    - Verify no server-side runtime files in output
    - Verify all internal links resolve (no broken links)
    - Confirm no third-party tracking scripts or external API calls in bundle
    - _Requirements: 1.1, 1.2, 1.6, 1.7, 12.1, 12.3, 12.4_

- [x] 15. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- The design explicitly states property-based testing does not apply (static website with no algorithms or data transformations)
- Unit tests use Vitest + React Testing Library with axe-core for accessibility
- All content is in French as this is a Moroccan consulting firm website
- TypeScript strict mode is used throughout for type safety

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3"] },
    { "id": 3, "tasks": ["3.1", "3.3", "3.4"] },
    { "id": 4, "tasks": ["3.2", "3.5", "4.1", "5.1"] },
    { "id": 5, "tasks": ["3.6", "4.2", "5.2", "6.1"] },
    { "id": 6, "tasks": ["8.1", "9.1", "10.1", "11.1"] },
    { "id": 7, "tasks": ["8.2", "9.2", "10.2", "11.2"] },
    { "id": 8, "tasks": ["13.1", "13.2", "13.3", "13.4"] },
    { "id": 9, "tasks": ["14.1"] }
  ]
}
```
