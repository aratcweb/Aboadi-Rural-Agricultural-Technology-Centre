# Aboadi Rural Agricultural Technology Centre (ARATC) - Official Website

This is the official institutional website for the Aboadi Rural Agricultural Technology Centre (ARATC), a Ghanaian non-governmental, non-profit organization that delivers practical agricultural training, livelihood development, research, and consultancy services.

## Project Overview
The website establishes a credible, modern, fast, and mobile-friendly digital presence for ARATC. It communicates the organization's practical experience and visible impact to development partners, government agencies, private-sector companies, and community members.

## Technology Stack
- **Framework:** Next.js 15.3 (App Router)
- **UI Library:** React 19
- **Language:** JavaScript/JSX
- **Styling:** Tailwind CSS 4
- **Animations:** Motion for React
- **Icons:** Lucide React
- **Deployment:** Vercel

## Local Setup

1. **Clone the repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:**
   Copy the example environment file and update it with your own credentials if testing the contact form.
   ```bash
   cp .env.example .env.local
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands
- `npm run dev` - Starts the local development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Runs the built application.
- `npm run lint` - Runs ESLint to catch errors and enforce code style.

## Folder Structure
- `/app` - Next.js App Router pages, layouts, and server actions.
- `/components` - Reusable UI components (Header, Footer, Button, etc.).
- `/content` - Structured local content files (services, projects, news) acting as a lightweight CMS.
- `/docs` - Project documentation including CMS integration and content gap records.
- `/lib` - Utility functions.
- `/public` - Static assets like images and logos.

## Environment Variables
The `.env.example` file contains the required environment variables. Primarily, these are needed for configuring the email delivery provider used by the contact form.

## Content-Editing Workflow
Content is driven by structured JavaScript files located in the `/content` directory.
- To add a new service, edit `content/services.js`.
- To add a new project, edit `content/projects.js`.
- To publish a new article, edit `content/news.js`.
These files export arrays of objects that are automatically rendered by the dynamic pages.

## Form-Delivery Setup
The contact form submits data to a server action located at `app/actions/contact.js`. Currently, it simulates a successful submission. To enable actual email delivery, integrate an email provider SDK (such as Resend or SendGrid) within the `submitEnquiry` function using the API keys from your environment variables.

## Deployment Notes
The application is optimized for deployment on Vercel. Push your code to a Git repository and import it into Vercel. The framework preset should automatically detect Next.js and apply the correct build settings.

## CMS Integration Direction
For a detailed guide on how to replace the local `/content` files with a Headless CMS like Sanity or Strapi, refer to `docs/cms-integration.md`.
