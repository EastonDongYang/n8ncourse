# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js-based educational website for n8n workflow automation, featuring tutorials, templates, use cases, and learning paths. Built with TypeScript, Tailwind CSS, and modern React patterns.

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

## Architecture Overview

### Tech Stack
- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom n8n color palette
- **Language**: TypeScript with strict mode
- **Icons**: Heroicons React
- **Animation**: Framer Motion (optional)
- **Deployment**: Vercel/Netlify ready

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/lib/` - Utility functions and helpers
- `src/types/` - TypeScript type definitions
- `src/data/` - Static data and content
- `public/` - Static assets and workflow templates

### Navigation Structure
- `/` - Homepage with all sections
- `/use-cases` - Real-world automation examples
- `/integrations` - Tool integration tutorials
- `/blog` - Educational blog posts
- `/templates` - Downloadable workflow templates
- `/tutorial/*` - Specific tutorial pages
- `/template/*` - Individual template pages

### Component Architecture
- **Header**: Sticky navigation with dropdown menus
- **Hero**: Landing section with CTAs
- **LearningPath**: Progressive skill development tracks
- **FeaturedTemplates**: Curated workflow templates
- **UseCases**: Industry-specific automation examples
- **RecommendedTools**: Integration tool recommendations
- **Community**: Social links and engagement
- **Newsletter**: Email subscription form
- **Footer**: Complete site navigation

### Color System
```css
/* Primary (Blue) */
primary-50: #f0f9ff -> primary-900: #0c4a6e

/* n8n Brand (Purple) */
n8n-50: #fdf4ff -> n8n-900: #701a75
```

### Key Features
- SEO optimized with JSON-LD structured data
- Responsive mobile-first design
- Sticky navigation with smooth scrolling
- Template download system
- Progressive learning paths
- Community integration
- Newsletter subscription
- Performance optimized images

### File Naming Conventions
- Components: PascalCase (e.g., `Header.tsx`)
- Pages: kebab-case directories with `page.tsx`
- Types: camelCase with descriptive names
- Utilities: camelCase in `lib/` directory

### Development Notes
- Uses Next.js App Router with TypeScript
- Tailwind CSS for all styling
- Heroicons for consistent iconography
- Framer Motion for animations
- Environment variables for Google verification
- Vercel deployment optimized
- No state management beyond React hooks
- Static content approach for performance