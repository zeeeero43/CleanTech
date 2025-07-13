# SILBERREH GmbH - Cleaning Services Website

## Overview

This is a modern, full-stack web application for SILBERREH GmbH, a professional cleaning services company based in Bergheim, Germany. The application is built with React, TypeScript, and Express.js, featuring a responsive design with shadcn/ui components and a focus on conversion optimization for cleaning service inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 2025)

### VPS Deployment Documentation and Code Cleanup
- **Date**: July 13, 2025
- **Changes**:
  - Removed all Replit-related development references from codebase
  - Cleaned up placeholder comments and development artifacts
  - Created comprehensive VPS deployment guide with GitHub integration
  - Added production configuration files (nginx, PM2, webhooks)
  - Implemented automatic deployment pipeline with GitHub webhooks
  - Created backup and monitoring scripts for production environment
  - Website is now production-ready and deployment-complete

### UI/UX Improvements and Fixes
- **Date**: July 13, 2025
- **Changes**:
  - Updated footer to dynamically display current year instead of hardcoded 2024
  - Replaced about page image with same professional cleaning image from hero section
  - Added favicon using company logo (same as navigation header logo)
  - Improved navigation scrolling reliability with better timing mechanisms
  - Fixed scroll-to-section functionality for "Dienstleistungen" and "Angebot einholen" links

### Contact Form Fixes and Emergency Hotline Removal
- **Date**: July 13, 2025
- **Changes**:
  - Removed all emergency hotline (Notfall-Hotline) references from entire website
  - Fixed buggy contact forms on service pages by replacing with working ContactForm component
  - Standardized contact form functionality across all service pages
  - Updated contact form component to remove AlertTriangle icon and emergency service references
  - All service pages now use the same reliable contact form implementation

### Image Replacement and Assets Update
- **Date**: July 13, 2025
- **Changes**:
  - Replaced all homepage images with user-provided professional cleaning photos
  - Updated hero section with high-quality indoor cleaning professional image
  - Replaced all service section images with authentic cleaning service photos:
    - Industriereinigung: Professional industrial cleaner in protective equipment
    - Bauschlussreinigung: Construction worker with concrete equipment
    - Büro- & Gewerbereinigung: Office cleaning team in professional environment
    - Fenster- & Glasreinigung: Professional window cleaning service
  - Updated "Über SILBERREH" section with same professional cleaning image as hero
  - All images properly imported and optimized for web performance

### Navigation and UX Improvements
- **Date**: July 13, 2025
- **Changes**:
  - Fixed navigation scroll functionality - now works correctly when navigating from service pages to home sections
  - Removed mobile sticky contact bar that was blocking content
  - Removed FAQ link from footer navigation
  - Enhanced FAQ design with improved button consistency and text formatting
  - Reduced padding under hero titles on all service pages for better spacing
  - Navigation now uses browser native hash navigation for reliable cross-page scrolling

### FAQ Integration Complete
- **Date**: July 13, 2025
- **Changes**:
  - Successfully integrated FAQ sections into all service pages
  - Added service-specific FAQ content for Industriereinigung, Bauschlussreinigung, Büroreinigung, and Fensterreinigung
  - Implemented collapsible FAQ functionality with ChevronDown icons
  - Added useState management for FAQ item toggling
  - Created consistent FAQ styling across all service pages
  - Removed standalone FAQ page and integrated questions into relevant service pages

### Google Maps Integration
- **Date**: July 13, 2025
- **Changes**:
  - Added Google Maps iframe to contact page showing company location
  - Embedded map shows SILBERREH GmbH at Kentener Wiesen 39a, 50126 Bergheim
  - Enhanced contact page with visual location reference

### Email Functionality Implementation
- **Date**: July 13, 2025
- **Changes**: 
  - Created free email solution using nodemailer for contact form notifications
  - Added server/email.ts with professional HTML email templates
  - Integrated email notifications in contact form submissions
  - Configured fallback logging when email service unavailable
  - Uses environment variables for SMTP configuration

### Service Pages Enhancement
- **Date**: July 13, 2025
- **Changes**:
  - Enhanced all service pages with detailed content and SEO optimization
  - Increased padding in blue hero sections (py-16 instead of py-12)
  - Added comprehensive service descriptions and benefits
  - Improved conversion optimization with detailed process explanations
  - Added pricing information and service frequency options
  - Enhanced mobile responsiveness and visual hierarchy

### UI/UX Improvements
- **Date**: July 13, 2025
- **Changes**:
  - Improved visual consistency across all service pages
  - Enhanced call-to-action buttons and contact sections
  - Better structured service feature lists
  - Improved glassmorphism effects and card layouts

### Navigation and Spacing Fixes
- **Date**: July 13, 2025
- **Changes**:
  - Fixed header spacing issues - titles no longer stick to header
  - Increased top padding from pt-24 to pt-32 on all subpages
  - Increased bottom padding from pb-12/pb-20 to pb-24 on all subpages
  - Logo enlarged and made responsive (16x16 desktop, 12x12 mobile)
  - GmbH now visible on mobile navigation
  - Added auto-scroll to top functionality when navigating between pages
  - Fixed service links on homepage to correctly navigate to subpages

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom brand colors and glassmorphism effects
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: Configured for PostgreSQL with Drizzle ORM
- **Storage**: Currently using in-memory storage with interface for easy database migration
- **API**: RESTful API with JSON responses
- **Validation**: Zod schemas for request/response validation

### Database Schema
- **Contact Requests Table**: Stores form submissions with fields for service type, contact details, and processing status
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Pages
- **Home**: Landing page with hero section, services overview, and contact form
- **Services**: Individual pages for each cleaning service (Industrial, Construction, Office, Window)
- **About**: Company information and values
- **Contact**: Dedicated contact page with form and business information
- **Legal**: Impressum, Privacy Policy, and Terms of Service pages

### UI Components
- **Navigation**: Responsive navigation with mobile hamburger menu
- **Hero Section**: Compelling headline with trust badges and call-to-action buttons
- **Services Grid**: Service cards with icons and descriptions
- **Contact Form**: Multi-step form with validation and submission handling
- **Footer**: Company information and links
- **Floating Elements**: WhatsApp button and scroll-to-top functionality

### Business Logic
- **Contact Form Processing**: Handles form submissions with validation
- **SEO Optimization**: Dynamic meta tags and structured data
- **Mobile Responsiveness**: Mobile-first design approach
- **Performance**: Optimized images and lazy loading

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data is validated using Zod schemas
3. Data is sent to `/api/contact` endpoint
4. Backend validates and stores the contact request
5. Success/error response is returned to frontend
6. User receives confirmation toast notification

### Service Information Display
1. Static service information is rendered from component data
2. Dynamic routing shows different service pages
3. SEO metadata is updated per page
4. Contact forms are pre-filled with service type when accessed from service pages

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Utilities**: date-fns for date handling, clsx for className management
- **Development**: Vite, TypeScript, ESLint

### Backend Dependencies
- **Express.js**: Web server framework
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Validation**: Zod for schema validation
- **Session Management**: express-session with connect-pg-simple
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Third-party Integrations
- **Analytics**: Prepared for Google Analytics integration
- **Communication**: WhatsApp Business integration for direct messaging
- **Email**: Prepared for email notification system (not yet implemented)

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: Local PostgreSQL or development database
- **Environment Variables**: DATABASE_URL required for database connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`
- **Static Assets**: Served by Express in production mode

### Production Deployment (VPS)
- **Server**: Ubuntu 22.04 LTS with Nginx reverse proxy
- **Process Management**: PM2 for clustering and process monitoring
- **Database**: PostgreSQL with dedicated user and database
- **SSL**: Let's Encrypt SSL certificates with automatic renewal
- **Monitoring**: PM2 monitoring, Nginx logs, automated backups
- **CI/CD**: GitHub webhooks for automatic deployment on push

### Environment Configuration
- **NODE_ENV**: Controls development vs production behavior
- **DATABASE_URL**: PostgreSQL connection string
- **PORT**: Server port configuration
- **SMTP Settings**: Email configuration for contact forms

### Scalability Considerations
- **Database**: PostgreSQL with connection pooling
- **Storage**: Interface-based storage layer allows easy migration from memory to database
- **Caching**: React Query provides client-side caching
- **CDN**: Static assets can be served from CDN in production
- **Load Balancing**: PM2 cluster mode for multi-core utilization

The application is designed for professional VPS deployment with GitHub integration, SSL encryption, and production-grade monitoring and backup systems.