# Kean on Biz - Personal Brand & Coaching Website

## Overview

A modern single-page marketing website for Jeremy Kean's coaching and consulting business. The site showcases his 35 years of business experience, service offerings (1:1 coaching, digital marketing agency, tech ecosystem), and features integration with GoHighLevel for booking and lead capture. Built with React, Vite, and shadcn/ui components with a focus on responsive design and scroll animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite for fast development and optimized builds.

**Routing**: Wouter for lightweight client-side routing with three main routes:
- `/` - Home page with all main sections
- `/jeremys-calendar` - Dedicated calendar/booking page
- `/become-a-coach` - Manumation Coach Certification "Coming Soon" page

**UI Component System**: shadcn/ui (New York variant) providing a comprehensive set of Radix UI-based components with Tailwind CSS styling. Components are configured to use CSS variables for theming, allowing for easy color scheme customization.

**Styling Approach**: 
- Tailwind CSS with custom @theme configuration
- OKLCH color space for more perceptually uniform colors
- Two color scheme variants (A: Deep Navy + Electric Blue, B: Warm Copper + Tech Blue)
- CSS variables for theme values to enable runtime theme switching
- Custom scroll animation system using Intersection Observer

**State Management**: Minimal state management using React hooks and context. ThemeContext provides theme switching capability (currently set to light mode only).

**Animation System**: Custom scroll-triggered animations built with Intersection Observer API:
- `useScrollAnimation` hook for detecting element visibility
- `AnimatedSection` component wrapper for declarative animations
- Supports fade-in, slide-up, slide-left, slide-right, and scale effects
- Configurable thresholds and delays

### Component Architecture

**Design System Components** (in `/components/ui/`):
- 50+ pre-built UI components from shadcn/ui
- All components use data-slot attributes for CSS targeting
- Consistent variant system using class-variance-authority
- Accessible by default (ARIA attributes, keyboard navigation)

**Custom Components**:
- `Navigation`: Fixed header with scroll effects and mobile menu
- `AnimatedSection`: Wrapper for scroll-triggered animations
- `CountUp`: Animated number counter triggered on scroll
- `CountdownTimer`: Real-time countdown to book launch date
- `ExitIntentPopup`: Modal triggered when user attempts to leave page
- `ErrorBoundary`: Global error handling with stack trace display

**Design Patterns**:
- Composition over inheritance for component reusability
- Custom hooks for shared logic (useScrollAnimation, useComposition, useMobile)
- Context providers for cross-cutting concerns (Theme, Dialog composition)
- Slot pattern from Radix UI for polymorphic components

### Build & Development

**Build Process**:
- Client: Vite bundles React app to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Production mode serves static files from dist/public

**Development Setup**:
- TypeScript with strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)
- Hot module replacement in development
- Separate tsconfig for Vite and Node environments

**Server Architecture**: Minimal Express.js server that serves static files in production and handles client-side routing by serving index.html for all routes. No backend API endpoints currently implemented.

### Performance Optimizations

- Lazy loading images with proper alt text for SEO
- Scroll animations only trigger once by default (configurable)
- Intersection Observer with configurable thresholds to prevent excessive re-renders
- Vite's code splitting and tree-shaking for optimal bundle size
- CSS variables reduce style recalculation overhead

### Responsive Design Strategy

- Mobile-first approach using Tailwind breakpoints (sm, md, lg, xl)
- Custom hook `useIsMobile` for JavaScript-based responsive logic
- Navigation collapses to hamburger menu on mobile
- Grid layouts adapt from single column to multi-column
- Touch-optimized interactive elements

## External Dependencies

### Third-Party Services

**GoHighLevel Integration**: Marketing automation and booking platform
- Embedded calendar widgets for session booking
- Newsletter signup forms
- Assessment/survey tools (Manumation Assessment)
- Integration points prepared but embed codes not visible in current files

**Google Fonts**: 
- Inter (weights 300-900) for UI text
- Playfair Display (weights 700-900) for display typography

**Umami Analytics**: Privacy-focused analytics configured via environment variables
- Endpoint and website ID configured in index.html
- Deferred loading to not impact page performance

### UI Libraries & Frameworks

**Radix UI Primitives** (v1.x): Unstyled, accessible component primitives including:
- Dialog, Dropdown, Popover, Select, Tabs, Accordion
- Navigation Menu, Context Menu, Hover Card
- Form controls: Checkbox, Radio, Slider, Switch
- All primitives provide accessibility features out of the box

**Framer Motion** (v12.23.22): Animation library for advanced animations beyond scroll triggers. Currently minimal usage but available for future enhancements.

**Embla Carousel** (v8.6.0): Carousel/slider component library with full touch support.

**CMDK** (v1.1.1): Command palette component for keyboard-driven navigation (not currently implemented in UI).

### Development & Build Tools

**Vite Plugins**:
- `@vitejs/plugin-react`: Fast Refresh and JSX transformation
- `@tailwindcss/vite`: Native Tailwind CSS processing
- `@builder.io/vite-plugin-jsx-loc`: JSX source location tracking
- `vite-plugin-manus-runtime`: Custom runtime plugin

**Type System**: 
- TypeScript 5.x with strict mode
- Type definitions for Node and Vite client
- React types for all components

**Code Quality**:
- Prettier for code formatting (configuration present in package.json scripts)
- ESBuild for server-side bundling in production

### Styling Dependencies

**Tailwind CSS Ecosystem**:
- `tailwindcss`: Core framework with custom configuration
- `tw-animate-css`: Extended animation utilities
- `class-variance-authority`: Type-safe variant management
- `clsx` + `tailwind-merge`: Conditional class name utilities via `cn()` helper

**Design Tokens**: Custom CSS variables defined in index.css provide theme values for:
- Colors (primary, secondary, accent, muted, destructive)
- Spacing and border radius
- Typography scale
- Component-specific tokens

### Notable Package Decisions

**Why Express over Next.js**: Simpler deployment model for a static site with minimal server requirements. The Express server only handles file serving and client-side route fallback.

**Why Wouter over React Router**: Lightweight (1.2kB) and sufficient for the simple routing needs of a two-page site.

**Why shadcn/ui over Material-UI**: Greater customization flexibility, smaller bundle size, and better alignment with Tailwind CSS workflow. Components are copied into the project rather than imported, allowing for easy modifications.

**Missing Database Layer**: Currently a static site with no backend persistence. GoHighLevel handles all data collection (bookings, newsletter signups, assessments).

## SEO / AEO / GEO Optimization

### Meta Tags (client/index.html)
- **Title**: Optimized with name, role, and brand
- **Description**: 160-character summary with keywords
- **Keywords**: Business coaching, AI automation, insurance agency consulting
- **Canonical URL**: https://keanonbiz.com/
- **Robots**: index, follow with max-image-preview:large
- **Open Graph**: Full social sharing support for Facebook/LinkedIn
- **Twitter Cards**: summary_large_image for Twitter previews
- **PWA**: theme-color, mobile-web-app-capable tags

### Structured Data (JSON-LD in client/index.html)
Three Schema.org schemas implemented:
1. **ProfessionalService**: Business info, founder details, services catalog with 3 offerings
2. **Book**: "The Manumation Method" by Jeremy Kean
3. **FAQPage**: 3 FAQs about Manumation Method, Jeremy Kean, and services

### Technical SEO Files
- **robots.txt** (client/public/): Allows all crawlers, specifies sitemap location
- **sitemap.xml** (client/public/): Two URLs with image sitemap extensions
- **manifest.json** (client/public/): PWA manifest with app icons and colors

### Accessibility Improvements
- Skip-to-content link for keyboard navigation
- Semantic HTML structure (main, header, section elements)
- ARIA labels on navigation and interactive elements
- Proper heading hierarchy (h1 > h2 > h3)
- Descriptive alt text on all images
- Lazy loading on below-the-fold images