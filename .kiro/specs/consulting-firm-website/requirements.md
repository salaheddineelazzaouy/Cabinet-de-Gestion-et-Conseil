# Requirements Document

## Introduction

This document defines the requirements for the "Cabinet de Gestion et Conseil" corporate website — a premium, fully static Next.js website for a multi-disciplinary consulting firm based in Morocco. The site communicates trust, precision, and excellence through a luxury gold-and-white visual identity inspired by top-tier consulting firms. It consists of four pages (Home, About, Services, Contact) with no backend, no database, and no authentication.

## Glossary

- **Website**: The complete Next.js static site for Cabinet de Gestion et Conseil
- **Navbar**: The sticky top navigation bar present on all pages
- **Footer**: The minimal professional footer present on all pages
- **Hero**: The large introductory banner section at the top of a page
- **Service_Card**: A UI card component displaying a single consulting service with icon, title, description, and benefits
- **CTA**: A call-to-action element (button or section) prompting user engagement
- **Section_Wrapper**: A reusable layout component providing consistent spacing and width constraints around page sections
- **Button_System**: The set of button variants (gold primary, outline) used across the site
- **Static_Export**: The Next.js build output as purely static HTML/CSS/JS files with no server-side runtime
- **SEO_Metadata**: The collection of meta tags, OpenGraph tags, and structured data for search engine optimization
- **Gold_Theme**: The primary brand color (#C9A227) used for accents, highlights, and interactive elements
- **Responsive_Grid**: The Tailwind CSS grid system providing mobile-first responsive layouts

## Requirements

### Requirement 1: Site Architecture and Static Export

**User Story:** As a site owner, I want the website built with Next.js App Router and exported as a fully static site, so that it loads fast, requires no server, and can be hosted on any static hosting provider.

#### Acceptance Criteria

1. THE Website SHALL use Next.js App Router with static export configuration (`output: 'export'` in next.config)
2. THE Website SHALL produce a fully static build where all output files are HTML, CSS, JavaScript, and image assets, requiring no Node.js server or server-side runtime to serve
3. THE Website SHALL use Tailwind CSS as the sole styling framework
4. THE Website SHALL implement a component-based architecture with at least 3 reusable UI components shared across multiple pages (e.g., Section_Wrapper, Button_System, Service_Card)
5. THE Website SHALL contain exactly four pages: Home, About, Services, and Contact
6. THE Website SHALL not include any backend API routes, Server Actions, dynamic server-rendered routes, database connections, or authentication mechanisms
7. WHEN the build command is executed, THE Website SHALL complete the static export without errors and produce an output directory deployable to any static hosting provider without additional build steps

### Requirement 2: Navigation System

**User Story:** As a visitor, I want a sticky navigation bar with clear active-link highlighting, so that I can easily navigate between pages at any scroll position.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the viewport during scrolling on all pages, rendered above all other page content
2. THE Navbar SHALL display the company name and navigation links to all four pages (Home, About, Services, Contact)
3. WHEN a page is active, THE Navbar SHALL highlight the corresponding link by applying the Gold_Theme color (#C9A227) to the link text and displaying a visible underline or bottom border in Gold_Theme color
4. WHEN the viewport width is below 768px, THE Navbar SHALL collapse navigation links into a mobile menu toggle button
5. WHEN the mobile menu toggle is activated, THE Navbar SHALL display navigation links in a vertical panel with each link on its own line
6. WHEN a navigation link within the mobile menu is selected, THE Navbar SHALL close the mobile panel and navigate to the selected page
7. THE Navbar SHALL use a semantic HTML nav element with aria-label identifying the navigation purpose, and the mobile menu toggle SHALL include aria-expanded indicating the current open or closed state of the mobile panel
8. THE Navbar SHALL have a minimum height of 56px and all interactive elements within it SHALL have a minimum touch target size of 44x44 pixels

### Requirement 3: Home Page

**User Story:** As a visitor, I want a compelling home page that introduces the firm and its services, so that I immediately understand the firm's value proposition and feel confident in its professionalism.

#### Acceptance Criteria

1. THE Website SHALL display a Hero section on the Home page with a headline, subheadline, and a primary CTA button linking to the Contact page
2. THE Website SHALL display an introduction section summarizing the firm's expertise and positioning
3. THE Website SHALL display a services overview section with six Service_Card components linking to the Services page
4. THE Website SHALL display a "Why Choose Us" section highlighting at least four key differentiators
5. THE Website SHALL display a final CTA section with a primary button linking to the Contact page
6. THE Website SHALL render Home page sections in the following order: Hero, Introduction, Services Overview, Why Choose Us, CTA
7. WHEN a visitor scrolls a section into the viewport on the Home page, THE Website SHALL reveal it with a fade-in animation lasting between 200ms and 500ms

### Requirement 4: About Page

**User Story:** As a visitor, I want to learn about the firm's mission, vision, and values, so that I can assess whether the firm aligns with my professional needs.

#### Acceptance Criteria

1. THE Website SHALL display the firm's mission statement on the About page as a distinct section with a heading
2. THE Website SHALL display the firm's vision statement on the About page as a distinct section with a heading
3. THE Website SHALL display the firm's core values: trust, precision, compliance, and excellence, each as a separate item within a values section
4. THE Website SHALL present each value with a title and a descriptive paragraph of at least two sentences
5. THE Website SHALL arrange the values in a Responsive_Grid that displays one column on mobile, two columns on tablet, and four columns on desktop
6. WHEN a visitor scrolls a section into the viewport on the About page, THE Website SHALL reveal it with a fade-in animation lasting between 200ms and 500ms

### Requirement 5: Services Page

**User Story:** As a visitor, I want to see detailed information about each consulting service, so that I can identify which services are relevant to my needs.

#### Acceptance Criteria

1. THE Website SHALL display exactly six Service_Card components on the Services page
2. THE Website SHALL present the following services: Accounting, Legal/Tax/Financial/HR Advisory, Audit/Control/Management, Company Creation and Domiciliation, Training, and Organization and Procedures
3. WHEN a Service_Card is displayed, THE Website SHALL show a title, a description of at least two sentences, a list of three to six benefits, and a visually distinct icon for that service
4. WHEN a visitor hovers over a Service_Card, THE Website SHALL apply a hover animation consisting of a scale transform or an elevation shadow change with a transition duration between 200ms and 300ms
5. THE Website SHALL arrange Service_Card components in a Responsive_Grid that displays one column on viewports below 768px, two columns on viewports between 768px and 1023px, and three columns on viewports of 1024px and above

### Requirement 6: Contact Page

**User Story:** As a visitor, I want to see contact information and a contact form, so that I can reach out to the firm through my preferred channel.

#### Acceptance Criteria

1. THE Website SHALL display a static contact form UI with fields for name, email, subject, and message on the Contact page
2. THE Website SHALL display placeholder contact information including address, email, and phone number in a dedicated section adjacent to or above the form
3. THE Website SHALL present the contact form with proper HTML form semantics, accessible labels associated via for/id pattern, and aria-required on mandatory fields
4. THE Website SHALL not submit form data to any backend endpoint (static UI only)
5. THE Button_System SHALL render a submit-styled primary button on the contact form consistent with the Gold_Theme
6. THE Website SHALL validate the email field using the HTML5 type="email" attribute for client-side format validation
7. THE Website SHALL mark the name, email, and message fields as required using the HTML required attribute

### Requirement 7: Footer

**User Story:** As a visitor, I want a minimal professional footer on every page, so that I can find essential company information and navigation links at the bottom of any page.

#### Acceptance Criteria

1. THE Footer SHALL appear at the bottom of every page, remaining below all page content and pushed to the bottom of the viewport on pages where content does not fill the full viewport height
2. THE Footer SHALL display the company name "Cabinet de Gestion et Conseil" and a copyright notice including the current year
3. THE Footer SHALL include navigation links to all four pages (Home, About, Services, Contact) that match the destinations provided in the Navbar
4. THE Footer SHALL use a semantic HTML footer element with appropriate ARIA attributes for accessibility
5. THE Footer SHALL style navigation links and company name using the Gold_Theme color (#C9A227) as an accent, consistent with the site's brand identity
6. WHEN a visitor hovers over a Footer navigation link, THE Footer SHALL apply a visible hover state transition

### Requirement 8: Visual Design and Brand Identity

**User Story:** As a site owner, I want a premium, corporate, minimalist design with a gold-and-white luxury theme, so that the website communicates professionalism and trust at the level of top consulting firms.

#### Acceptance Criteria

1. THE Website SHALL use Gold_Theme (#C9A227) as the primary accent color for buttons, highlights, and interactive elements, and a dark neutral color (#1A1A1A or darker) for body text
2. THE Website SHALL use white (#FFFFFF) as the dominant background color with a minimum vertical spacing of 48px between page sections
3. THE Website SHALL use a typographic scale with at least three distinct levels: headings (minimum 32px), subheadings (minimum 22px), and body text (minimum 16px), with each level visually distinguishable by size and weight
4. THE Website SHALL apply minimum padding of 24px on content containers and minimum vertical margin of 48px between sections on viewports 768px and above
5. WHEN a visitor scrolls a section into the viewport, THE Website SHALL reveal it with a fade-in animation lasting between 200ms and 500ms
6. WHEN a visitor hovers over an interactive element, THE Website SHALL apply a transition effect lasting between 150ms and 300ms
7. THE Website SHALL limit each section to a single primary visual focus and shall not use more than three accent colors across the entire site
8. IF the user has enabled a prefers-reduced-motion setting, THEN THE Website SHALL disable all non-essential animations including fade-in and hover transitions

### Requirement 9: Responsive Design

**User Story:** As a visitor, I want the website to work flawlessly on any device, so that I have a consistent experience whether browsing on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Website SHALL implement a mobile-first responsive design approach using the following breakpoints: mobile (below 768px), tablet (768px to 1023px), and desktop (1024px and above)
2. THE Responsive_Grid SHALL display a single-column layout on mobile viewports, a two-column layout on tablet viewports, and a two-or-three-column layout on desktop viewports
3. THE Website SHALL ensure all text remains readable without horizontal scrolling on viewports as narrow as 320px, with body text rendered at a minimum of 16px font size
4. THE Website SHALL ensure all interactive elements (buttons, links, menu toggles) have a minimum touch target size of 44x44 pixels on viewports below 768px
5. WHEN the viewport width changes, THE Website SHALL adjust spacing, font sizes, and component layouts without content overflow, element overlap, or truncation of visible text
6. IF the viewport width is between 320px and 1280px, THEN THE Website SHALL render all page content within the visible viewport width without requiring horizontal scrolling

### Requirement 10: SEO and Metadata

**User Story:** As a site owner, I want each page to have proper SEO meta tags and OpenGraph tags, so that the site ranks well in search engines and displays correctly when shared on social media.

#### Acceptance Criteria

1. THE SEO_Metadata SHALL include a unique title tag (maximum 60 characters) and a unique meta description (maximum 160 characters) for each of the four pages
2. THE SEO_Metadata SHALL include OpenGraph tags (og:title, og:description, og:type, og:url, og:image) for each page
3. THE Website SHALL use semantic HTML elements (header, nav, main, section, article, footer) throughout all pages
4. THE Website SHALL generate valid HTML output in the Static_Export with no JavaScript-required rendering for page content, all internal links using anchor elements with href attributes, and no broken internal links
5. THE Website SHALL include a properly structured heading hierarchy (single h1 per page, logical h2-h6 nesting with no skipped heading levels)
6. THE SEO_Metadata SHALL include a canonical URL meta tag on each page pointing to that page's definitive URL

### Requirement 11: Accessibility

**User Story:** As a visitor with accessibility needs, I want the website to follow accessibility best practices, so that I can navigate and understand the content using assistive technologies.

#### Acceptance Criteria

1. THE Website SHALL include aria-expanded and aria-controls attributes on the Navbar mobile menu toggle, aria-label attributes on icon-only buttons, and aria-required on mandatory form fields
2. THE Website SHALL ensure all informative images and icons have non-empty alt text or aria-label attributes that convey the element's purpose, and all decorative images have an empty alt attribute or aria-hidden="true"
3. THE Website SHALL maintain a color contrast ratio of at least 4.5:1 for normal text (below 18pt regular or 14pt bold) and 3:1 for large text (18pt regular or 14pt bold and above) against background colors
4. THE Website SHALL support keyboard navigation for all interactive elements with focus indicators that have a minimum contrast ratio of 3:1 against adjacent colors and are at least 2px in width or outline thickness
5. THE Website SHALL associate form labels with their corresponding input fields using the for/id pattern or aria-labelledby
6. THE Website SHALL ensure keyboard focus follows a logical reading order (top to bottom, left to right) and does not become trapped in any component, allowing users to navigate away using standard Tab and Shift+Tab keys

### Requirement 12: Performance and Loading

**User Story:** As a visitor, I want the website to load quickly, so that I do not experience delays or frustration when browsing.

#### Acceptance Criteria

1. THE Website SHALL produce a static bundle with no unnecessary JavaScript libraries beyond Next.js and Tailwind CSS
2. THE Website SHALL implement smooth scroll behavior for in-page navigation using CSS scroll-behavior or equivalent
3. THE Website SHALL not include any third-party tracking scripts, analytics, or external API calls that block rendering
4. WHEN the Static_Export is served from a CDN, THE Website SHALL achieve a Lighthouse Performance score of 90 or above
5. THE Website SHALL lazy-load images and non-critical assets below the fold using native loading="lazy" attribute or Intersection Observer

### Requirement 13: Button System

**User Story:** As a developer, I want a consistent button component system, so that all call-to-action elements share a unified look and feel across the site.

#### Acceptance Criteria

1. THE Button_System SHALL provide a primary variant styled with the Gold_Theme background color (#C9A227) and white text
2. THE Button_System SHALL provide an outline variant styled with a 2px solid Gold_Theme border, transparent background, and Gold_Theme text
3. WHEN a visitor hovers over a button, THE Button_System SHALL apply a visual transition effect with a duration between 200ms and 300ms, changing either the background shade, border color, or adding a box-shadow
4. WHEN a button receives keyboard focus, THE Button_System SHALL display a visible focus indicator with at least 2px outline offset distinguishable from the surrounding background
5. THE Button_System SHALL render all button instances with identical padding (minimum 12px vertical, 24px horizontal), a border-radius between 4px and 8px, and a consistent font-family and font-weight
6. THE Button_System SHALL render as an HTML `<button>` element for in-page actions and as an HTML `<a>` element with `role="button"` for navigation actions, and SHALL include an accessible label via visible text content or `aria-label` attribute
