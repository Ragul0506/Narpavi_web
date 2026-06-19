# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for Sri Narpavi Beauty Parlour in Swamimalai, featuring bridal makeup, skincare, and hair styling services. The site uses TypeScript, Tailwind CSS with custom parlour-themed colors, Framer Motion for animations, and Lenis for smooth scrolling. The application supports bilingual content (English/Tamil) via a custom context provider.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint all files
npm run lint

# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.test.tsx

# Run tests in watch mode
npm test -- --watch
```

## Architecture

### Routing & Pages

- **App Router** (Next.js 16): Uses `/app` directory with file-based routing
- **Homepage** (`app/page.tsx`): Renders Navbar, Hero, Services, Reviews, Footer sections
- **Dynamic Service Pages** (`app/services/[slug]/page.tsx`): Service detail pages with static generation via `generateStaticParams()` for three slugs: `bridal-makeover`, `skincare-glow`, `hair-styling`
- **Root Layout** (`app/layout.tsx`): Wraps app in `LanguageProvider` and `SmoothScrollProvider`, includes comprehensive SEO metadata

### Data & State Management

- **Service Data** (`lib/serviceData.ts`): Central source for all service information with TypeScript types. Exports `ServiceDetail` type, `serviceDetails` object, `getServiceDetail()` helper, and `serviceSlugs` array
- **i18n Context** (`context/LanguageContext.tsx`): Client-side language switching between English and Tamil using React Context. Dictionary stored in-file with `dictionary.en` and `dictionary.ta` objects. Use `useLanguage()` hook to access `language`, `toggleLanguage()`, and `t` (translations)

### Components

All components in `/components` directory:
- Most use Framer Motion (`motion.*` components) for animations
- Animation variants defined inline within components
- Use `useLanguage()` hook for translated text
- Mobile-responsive with Tailwind breakpoints (sm, md, lg)

### Styling System

- **Tailwind Config** (`tailwind.config.js`): Custom `parlour.*` color palette (night, plum, velvet, orchid, rose, pearl, champagne, gold, bronze, ink), custom animations (shimmer, float, revealUp, aura), custom shadows (glow, gold, glass), gradient backgrounds
- **Global Styles** (`app/globals.css`): CSS custom properties for fonts (`--font-sans`, `--font-display`), accessibility support for `prefers-reduced-motion`
- **Typography**: Body text uses `font-sans` (Inter), headings use `font-display` (Cormorant Garamond)

### Testing

- **Jest + React Testing Library**: Config in `jest.config.mjs` with path alias `@/` mapped to `<rootDir>/`
- **Framer Motion Mocking**: Tests mock `framer-motion` to render plain HTML elements instead of animated components (see `__tests__/ServiceDetailShowcase.test.tsx` for pattern)
- **Coverage**: Tracks `app/**` and `components/**` files, excludes `.d.ts` and `.next/`

## Key Technical Constraints

- **Security**: Strict CSP headers in `next.config.js` and `netlify.toml` — adding external scripts or iframes requires updating CSP policies
- **Image Optimization**: Only Unsplash images allowed via `remotePatterns` — to add new image sources, update `next.config.js` image config
- **Standalone Output**: `output: 'standalone'` in Next config for Docker deployment — entire app packaged as self-contained artifact
- **No External APIs**: All content is static — service data lives in `lib/serviceData.ts`, no CMS or backend

## Development Patterns

- **Service Detail Pages**: When adding new services, update `lib/serviceData.ts` with slug key, then page auto-generates via static params
- **Adding Translations**: Update both `en` and `ta` objects in `dictionary` (in `LanguageContext.tsx`) with matching keys
- **Component Animation**: Use Framer Motion's `motion.*` components with `initial`, `animate`, `transition` props. Prefer `whileInView` for scroll-triggered animations with `viewport: { once: true }`
- **Color Usage**: Use `parlour-*` Tailwind classes (e.g., `bg-parlour-night`, `text-parlour-pearl`, `border-parlour-orchid`) instead of arbitrary colors

## Deployment

- **Netlify**: Primary deployment via `netlify.toml` config with Next.js plugin, Node 20, security headers
- **Docker**: Multi-stage Dockerfile provided for containerized deployment (builds standalone output, runs on port 3000)
- **Static Export Limitation**: Cannot use `output: 'export'` due to dynamic routes — requires Node.js server

## File Organization

```
/app              → Pages, layouts, global styles
/components       → React components (presentational)
/context          → React Context providers (LanguageContext)
/lib              → Data, utilities (serviceData.ts)
/__tests__        → Jest test files (*.test.tsx)
/public           → Static assets
```
