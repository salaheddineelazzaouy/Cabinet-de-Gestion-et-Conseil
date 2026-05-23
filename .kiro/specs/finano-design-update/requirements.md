# Requirements Document

## Introduction

Ce document définit les exigences pour la mise à jour visuelle du site "Cabinet de Gestion et Conseil" selon le design Finano. La refonte couvre la typographie, les composants partagés (TopBar, PageBanner, SectionTitle, Counter, TestimonialSlider, InfoBox, CTASection), la refonte du layout (Navbar, Footer multi-colonnes), et la mise à jour des pages (Accueil, À propos, Services, Contact).

## Glossary

- **System**: L'application web Next.js "Cabinet de Gestion et Conseil"
- **TopBar**: Barre de contact mince affichée au-dessus de la Navbar
- **Navbar**: Barre de navigation principale sticky
- **PageBanner**: Bannière pleine largeur avec titre et fil d'Ariane pour les pages internes
- **SectionTitle**: Composant réutilisable de titre de section avec label, heading et mot accentué
- **Counter**: Composant d'animation de compteur numérique déclenché au scroll
- **TestimonialSlider**: Carrousel de témoignages clients avec navigation
- **InfoBox**: Boîte d'information de contact stylisée avec icône
- **CTASection**: Section d'appel à l'action pleine largeur
- **ServiceCard**: Carte de service redessinée avec icon-box style Finano
- **Footer**: Pied de page multi-colonnes avec liens et informations de contact
- **Playfair_Display**: Police serif utilisée pour les titres (h1, h2)
- **Poppins**: Police sans-serif utilisée pour le corps de texte et sous-titres

## Requirements

### Requirement 1: Typography System

**User Story:** As a visitor, I want to see a professional typography with serif headings and sans-serif body text, so that the website conveys a premium, trustworthy image.

#### Acceptance Criteria

1. THE System SHALL load Playfair Display (weight 700) and Poppins (weights 400, 500, 600) via `next/font/google`
2. THE System SHALL apply Playfair Display as the font family for all h1 and h2 elements
3. THE System SHALL apply Poppins as the font family for all body text, h3, h4, labels, and navigation links
4. THE System SHALL define CSS custom properties for the font families and extend the Tailwind config with `fontFamily` tokens (`font-serif` and `font-sans`)
5. THE System SHALL render text without layout shift by using `next/font` font loading with `display: swap` behavior

### Requirement 2: Tailwind Configuration Update

**User Story:** As a developer, I want the Tailwind config extended with new design tokens, so that all components use consistent spacing, colors, and typography.

#### Acceptance Criteria

1. THE System SHALL extend the Tailwind theme with `fontFamily` entries for `serif` (Playfair Display) and `sans` (Poppins)
2. THE System SHALL update the section spacing token from 48px to 80px for desktop and keep 48px for mobile
3. THE System SHALL add a `component-gap` spacing token of 32px
4. THE System SHALL maintain all existing color tokens (gold, dark) without modification

### Requirement 3: TopBar Component

**User Story:** As a visitor, I want to see the company's contact information (email, phone, address) in a slim bar above the navigation, so that I can quickly find how to reach the company.

#### Acceptance Criteria

1. THE TopBar SHALL display the company email, phone number, and address from `data/company.ts`
2. THE TopBar SHALL use a dark background (#1A1A1A) with white text and gold icon accents
3. WHILE the viewport width is below the `md` breakpoint, THE TopBar SHALL be hidden
4. THE TopBar SHALL render social media links on the right side when available in company data

### Requirement 4: Navbar Enhancement

**User Story:** As a visitor, I want a more prominent navigation bar with better branding, so that I can easily navigate the site and recognize the company identity.

#### Acceptance Criteria

1. THE Navbar SHALL display the company name using Playfair Display serif font at a larger size than current
2. THE Navbar SHALL have a minimum height of 70px
3. WHEN the user scrolls down the page, THE Navbar SHALL transition from a transparent/light background to a white background with shadow
4. THE Navbar SHALL maintain the existing mobile hamburger menu behavior and accessibility attributes
5. THE Navbar SHALL display active links with a gold underline indicator

### Requirement 5: PageBanner Component

**User Story:** As a visitor on an inner page, I want to see a clear page title banner with breadcrumb navigation, so that I know where I am in the site hierarchy.

#### Acceptance Criteria

1. WHEN an inner page (About, Services, Contact) loads, THE PageBanner SHALL display the page title in a large serif heading
2. THE PageBanner SHALL display a breadcrumb trail showing "Accueil > [Current Page]"
3. THE PageBanner SHALL use a dark gradient background with a subtle gold accent line at the bottom
4. THE PageBanner SHALL have a height of approximately 200px on desktop and 150px on mobile
5. THE PageBanner SHALL center the title and breadcrumbs horizontally

### Requirement 6: SectionTitle Component

**User Story:** As a visitor, I want section titles to follow a consistent pattern with a small label and large heading, so that the content hierarchy is clear and visually appealing.

#### Acceptance Criteria

1. THE SectionTitle SHALL render a small uppercase gold label above the main heading
2. THE SectionTitle SHALL render the heading using Playfair Display serif font
3. WHERE an `accentWord` prop is provided, THE SectionTitle SHALL highlight that word in gold color within the heading
4. WHERE a `description` prop is provided, THE SectionTitle SHALL render a paragraph below the heading with muted color
5. WHERE the `centered` prop is true, THE SectionTitle SHALL center-align all text elements

### Requirement 7: Counter Component

**User Story:** As a visitor, I want to see animated statistics (clients served, years of experience, etc.), so that I can quickly understand the company's track record.

#### Acceptance Criteria

1. WHEN the Counter component scrolls into the viewport, THE Counter SHALL animate from 0 to the target number
2. THE Counter SHALL animate only once (on first intersection)
3. THE Counter SHALL use an easeOut animation curve over a default duration of 2000ms
4. WHILE the user has `prefers-reduced-motion` enabled, THE Counter SHALL display the final number immediately without animation
5. THE Counter SHALL display an optional suffix (e.g., "+", "%") after the number and a label below
6. THE Counter SHALL use Intersection Observer API to detect viewport entry

### Requirement 8: TestimonialSlider Component

**User Story:** As a visitor, I want to read client testimonials in a rotating display, so that I can see social proof of the company's quality of service.

#### Acceptance Criteria

1. THE TestimonialSlider SHALL display one testimonial at a time with quote text, author name, and role
2. THE TestimonialSlider SHALL provide navigation dots to switch between testimonials
3. THE TestimonialSlider SHALL auto-advance every 5 seconds
4. WHEN the user hovers over or focuses on the TestimonialSlider, THE TestimonialSlider SHALL pause auto-advance
5. WHILE the user has `prefers-reduced-motion` enabled, THE TestimonialSlider SHALL disable auto-advance
6. THE TestimonialSlider SHALL support keyboard navigation between testimonials
7. IF the testimonials array is empty, THEN THE TestimonialSlider SHALL not render any content

### Requirement 9: InfoBox Component

**User Story:** As a visitor on the contact page, I want to see contact information displayed in styled boxes with icons, so that I can easily identify and use different contact methods.

#### Acceptance Criteria

1. THE InfoBox SHALL display an icon inside a gold-bordered circle (48x48px)
2. THE InfoBox SHALL display a title and content below the icon
3. WHERE an `href` prop is provided, THE InfoBox SHALL wrap the content in a clickable link
4. WHEN the user hovers over the InfoBox, THE InfoBox SHALL show a subtle shadow elevation effect

### Requirement 10: CTASection Component

**User Story:** As a visitor, I want to see prominent call-to-action sections, so that I am encouraged to contact the company.

#### Acceptance Criteria

1. THE CTASection SHALL render a full-width section with a centered heading and CTA button
2. WHERE the variant is "dark", THE CTASection SHALL use a dark background with white text and a gold button
3. WHERE the variant is "gold", THE CTASection SHALL use a gold background with dark text and a dark button
4. WHERE a `description` prop is provided, THE CTASection SHALL display it between the heading and button
5. THE CTASection SHALL link the button to the specified `buttonHref`

### Requirement 11: ServiceCard Redesign

**User Story:** As a visitor, I want to see services presented in a modern icon-box card style, so that I can quickly identify and understand each service offering.

#### Acceptance Criteria

1. THE ServiceCard SHALL display a large icon inside a styled icon box (80x80px, gold background with opacity)
2. THE ServiceCard SHALL display the service title using serif font
3. THE ServiceCard SHALL display a short description
4. THE ServiceCard SHALL include a "Voir" link with an arrow icon at the bottom
5. WHEN the user hovers over the ServiceCard, THE ServiceCard SHALL elevate with shadow and transition the icon color

### Requirement 12: Footer Redesign

**User Story:** As a visitor, I want a rich multi-column footer with organized links and contact information, so that I can navigate the site and find contact details from any page.

#### Acceptance Criteria

1. THE Footer SHALL display the company name/logo in the first column with a brief description
2. THE Footer SHALL display service links in a second column sourced from `data/navigation.ts` footer columns
3. THE Footer SHALL display cabinet/company links in a third column
4. THE Footer SHALL display contact information (address, phone, email) in a fourth column
5. THE Footer SHALL display a copyright notice at the bottom
6. THE Footer SHALL use a dark background with white/gold text consistent with the TopBar

### Requirement 13: Home Page Update

**User Story:** As a visitor landing on the home page, I want to see a premium, engaging layout with hero section, services preview, statistics, testimonials, and CTA, so that I immediately understand the company's value proposition.

#### Acceptance Criteria

1. THE Home page SHALL display a full-width hero section with a bold serif heading, subtitle, and CTA button
2. THE Home page SHALL display a services preview section using SectionTitle and 3 compact ServiceCards
3. THE Home page SHALL display an about preview section with text content and a row of Counter components showing company statistics
4. THE Home page SHALL display a TestimonialSlider section
5. THE Home page SHALL display a CTASection at the bottom of the page

### Requirement 14: About Page Update

**User Story:** As a visitor, I want the About page to have a professional layout with page banner, structured sections, and animated statistics, so that I can learn about the company's mission and track record.

#### Acceptance Criteria

1. THE About page SHALL display a PageBanner with title "À propos" and breadcrumbs
2. THE About page SHALL use SectionTitle components for each content section
3. THE About page SHALL display Counter components showing company statistics (clients, projects, years, team)
4. THE About page SHALL maintain the existing mission, vision, and values content

### Requirement 15: Services Page Update

**User Story:** As a visitor, I want the Services page to have a page banner and redesigned service cards, so that I can browse all services in a visually appealing layout.

#### Acceptance Criteria

1. THE Services page SHALL display a PageBanner with title "Nos Services" and breadcrumbs
2. THE Services page SHALL display all services using the redesigned ServiceCard component with full details (including benefits list)
3. THE Services page SHALL use SectionTitle for the main section heading

### Requirement 16: Contact Page Update

**User Story:** As a visitor, I want the Contact page to have a page banner and styled contact information boxes, so that I can easily find and use different contact methods.

#### Acceptance Criteria

1. THE Contact page SHALL display a PageBanner with title "Contact" and breadcrumbs
2. THE Contact page SHALL display contact information using InfoBox components (address, email, phone, hours)
3. THE Contact page SHALL maintain the existing contact form with all validation and accessibility features

### Requirement 17: Data Model Extensions

**User Story:** As a developer, I want the data layer extended with testimonials, company stats, and footer navigation, so that all new components have proper data sources.

#### Acceptance Criteria

1. THE System SHALL create a `data/testimonials.ts` file with testimonial entries (id, quote, name, role, company)
2. THE System SHALL extend `data/company.ts` with a `stats` object (clientsServed, projectsCompleted, yearsExperience, teamMembers)
3. THE System SHALL extend `data/company.ts` with a `contact` object (email, phone, address, city, socialLinks)
4. THE System SHALL extend `data/navigation.ts` with `footerColumns` array containing service and cabinet link groups

### Requirement 18: Accessibility and Reduced Motion

**User Story:** As a visitor using assistive technology or with motion sensitivity, I want all new components to be accessible and respect my motion preferences, so that I can use the site comfortably.

#### Acceptance Criteria

1. WHILE the user has `prefers-reduced-motion` enabled, THE System SHALL disable all scroll-triggered animations and auto-advancing behaviors
2. THE System SHALL provide proper ARIA labels for all interactive elements in new components
3. THE System SHALL ensure all new components support keyboard navigation
4. THE System SHALL maintain a minimum touch target size of 44x44px for all interactive elements
5. THE System SHALL maintain WCAG AA color contrast ratios across all new components

### Requirement 19: Layout Integration

**User Story:** As a visitor, I want the TopBar, enhanced Navbar, and multi-column Footer to appear consistently across all pages, so that the site feels cohesive and professional.

#### Acceptance Criteria

1. THE System SHALL render the TopBar above the Navbar in the root layout
2. THE System SHALL render the enhanced Navbar below the TopBar with sticky positioning
3. THE System SHALL render the multi-column Footer at the bottom of every page
4. THE System SHALL ensure the TopBar + Navbar combination does not cause layout shift on page load
