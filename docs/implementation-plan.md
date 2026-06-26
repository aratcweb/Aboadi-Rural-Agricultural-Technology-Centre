# Implementation Plan

## Overview
Build the ARATC institutional website based on the provided PDF blueprint and updated brand name instructions.

## Step 1: Foundation
- Initialize Next.js 15.3 app (JS, App Router, Tailwind CSS 4).
- Install dependencies: `lucide-react`, `motion`.
- Set up root layout, global styles, and fonts.
- Create base UI components (Header, Footer, Button, Section).

## Step 2: Content Architecture
- Create structured content files in `content/` for services, projects, gallery, news, etc.
- Build helper functions to query these files.

## Step 3: Core Pages
- Homepage: Hero, Trust strip, Services, Impact, Projects, Leadership, CTA.
- About: History, Vision, Mission, Leadership.
- Services Directory & Individual Service Pages.
- Projects Listing & Case Studies.
- Gallery: Filterable image grid with Lightbox.
- Leadership & Partners.
- News Listing & Article Pages.
- Contact: Office details, dynamic form with server action.

## Step 4: SEO & Performance
- Add structured data and metadata.
- Optimize images.
- Generate sitemap and robots.txt.

## Step 5: Validation & Documentation
- Run build and lint checks.
- Document CMS usage and setup instructions.
