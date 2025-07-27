# Devargho Chakraborty Portfolio - Replit Documentation

## Overview

This is a professional, high-end portfolio website for Devargho Chakraborty, a Frontend Designer currently pursuing Computer Science at Techno India University. The application showcases a modern single-page application with cyberpunk/terminal theme, sophisticated animations, and premium aesthetics. Built with React, TypeScript, and Express.js, it features authentic content from hackathon experiences and real projects. The site now features terminal-style typing animations, Matrix rain background effects, distinctive glitch text headers with green highlights, frosted glass cursor effects, and is fully optimized for Vercel deployment.

## Recent Changes (January 27, 2025)

### Portfolio Content and Link Updates
- ✅ Updated hero section button from "./view_projects.sh" to "./view_achievements.sh"
- ✅ Replaced "github --projects" button with "wget --resume" button that downloads resume PDF
- ✅ Fixed git remote URL from incorrect "Boredoms" to correct "Boredooms" GitHub profile
- ✅ Updated "View GitHub" button to redirect to https://github.com/Boredooms
- ✅ Updated "All Projects" button to redirect to https://github.com/Boredooms?tab=projects
- ✅ Added resume download functionality with proper PDF file serving

### Migration to Replit Environment
- ✅ Successfully migrated from Replit Agent to standard Replit environment
- ✅ Fixed dependencies and workflow configurations for seamless deployment
- ✅ Verified all TypeScript compilation and Express server functionality
- ✅ Enhanced security practices with proper client/server separation

### Final Typography and Font Updates
- ✅ Implemented Orbitron Google Font for all section headers for clean sci-fi aesthetic
- ✅ Removed italic styling and applied bold (font-black) effect for stronger visual impact
- ✅ Character changing animations and 3D anaglyph glitch effects fully preserved
- ✅ All responsive sizes maintained: ABOUT/SKILLS (text-6xl to text-[10rem]), ACHIEVEMENTS (text-5xl to text-9xl), CONNECT (text-4xl to text-8xl)
- ✅ Enhanced navigation spacing to prevent header overlap with proper pt-20 padding
- ✅ Optimized skills section timing and responsive layout for better mobile experience

### Final UI Adjustments and Vercel Deployment
- ✅ Centered action buttons in hero section under "Frontend Designer & Developer" text
- ✅ Fixed skills section terminal commands to appear instantly with boxes (reduced delay from 6200ms to 6000ms)
- ✅ Optimized box animation timing for smoother sequential appearance
- ✅ Updated vercel.json with modern static deployment configuration
- ✅ Added robots.txt and _redirects for proper SEO and routing
- ✅ Verified build process works correctly with vite build command
- ✅ Prepared project for seamless Vercel free tier deployment

### Previous Enhancements
- ✅ Fixed section headers with green text highlights: AB[OUT], SK[ILLS], AC[HIEVEME]NTS, LET'S [CONNECT]
- ✅ Added frosted glass cursor effect with green glow and hover animations
- ✅ Updated projects section: "ls ~/projects/" → "ls ~/achievements/" 
- ✅ Updated description: "Displaying the hackathons participated and creative works..."
- ✅ Improved contact section animations - components appear sequentially after typing
- ✅ Fixed skills section timing - components appear after terminal commands complete
- ✅ Enhanced overall animations with professional timing and flow
- ✅ Updated Vercel configuration for seamless deployment

## User Preferences

Preferred communication style: Simple, everyday language.
Header design preference: Bold, cyberpunk-style headers with Orbitron sci-fi font, bold (font-black) styling, and 3D anaglyph glitch effects with character changing animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom cyberpunk theme variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and interactions, GSAP for scroll-triggered animations
- **3D Graphics**: Three.js for particle system background effects
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Vite for hot module replacement and build tooling

### Build System
- **Bundler**: Vite for frontend, esbuild for backend production builds
- **Development**: tsx for TypeScript execution in development
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Key Components

### Core Pages
- **Home Page**: Main portfolio showcase with hero featuring initialization sequence and terminal-style name display
- **About Section**: Terminal window displaying personal information with typing animations
- **Skills Section**: Terminal-coded skill categories with progress bars and command-line styling
- **Achievements Section**: Hackathon projects displayed with terminal headers and typing effects
- **Contact Section**: Terminal-style contact form with communication channel setup animation

### UI Components
- **Matrix Rain**: Animated green falling characters background effect
- **Scroll Typed Text**: Terminal-style typing animation triggered on scroll for headers and content
- **Terminal Windows**: Command-line styled containers for all sections from Skills onwards
- **Navigation**: Smooth scroll navigation with proper section highlighting
- **Initialization Sequence**: Terminal startup animation on hero section
- **Project Cards**: Terminal-themed hackathon achievement cards
- **Contact Form**: Terminal-styled form with command-line aesthetics

### Animation Features
- **GSAP Animations**: Scroll-triggered animations for skill bars and project cards
- **Framer Motion**: Page transitions, hover effects, and interactive animations
- **Smooth Scrolling**: Custom smooth scroll implementation for navigation

## Data Flow

### Frontend Data Management
- React Query handles all server state with automatic caching and synchronization
- Local component state for UI interactions and form handling
- Toast notifications for user feedback using custom toast system

### Backend Data Flow
- Express.js middleware for request logging and error handling
- Storage abstraction layer with in-memory implementation (ready for database integration)
- Route registration system for API endpoints
- Session management with PostgreSQL session store

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- Drizzle schema definitions with Zod validation integration
- Database migrations handled through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Animation and Graphics
- **Framer Motion**: Production-ready motion library
- **GSAP**: Professional-grade animation library with ScrollTrigger
- **Three.js**: 3D graphics and WebGL rendering

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the entire stack
- **React Hook Form**: Performant form library
- **Zod**: Runtime type validation

### Database and Backend
- **Drizzle ORM**: Type-safe database queries
- **Neon Database**: Serverless PostgreSQL provider
- **Express**: Web application framework
- **Connect PG Simple**: PostgreSQL session store

## Deployment Strategy

### Production Build
- Frontend builds to `dist/public` directory with Vite optimization
- Backend compiles to `dist/index.js` with esbuild bundling
- Static assets served through Express in production
- Environment variables for database configuration

### Development Workflow
- Hot module replacement for frontend development
- TypeScript compilation checking
- Database schema migrations with `db:push` command
- Integrated development server with proxy setup

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Single Express server serving both API and static files
- Database URL configuration through environment variables
- Replit-specific development enhancements and error handling

The application is designed to be easily deployable on Replit with automatic database provisioning and seamless development-to-production transitions.