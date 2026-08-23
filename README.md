# RAG MARBLES

Marketing website and enquiry form for RAG MARBLES, a plumbing and sanitary-products store in Prayagraj. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive store, product, brands, contact, and WhatsApp experience
- Server-side enquiry endpoint with optional MongoDB persistence and Gmail notifications
- SEO metadata, sitemap, and robots route

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env.local
   ```

   Configure at least one enquiry-delivery option:

   - `MONGODB_URI` saves enquiries in MongoDB.
   - `GMAIL_USER` and `GMAIL_APP_PASSWORD` email the enquiry and a customer confirmation. Use a Gmail app password, never your normal password.

   When neither option is configured, the contact form intentionally returns a clear unavailable message. The direct call and WhatsApp links remain available.

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:4028](http://localhost:4028).

## Quality checks

```bash
npm run lint
npm run type-check
npm run build
```

`npm run start` serves the production build on port 4028 after `npm run build`.

## Project structure

```
public/                 Static brand assets
src/app/                App Router pages, API, sitemap, and robots route
src/app/components/     Homepage sections
src/components/         Shared UI, header, and footer
src/lib/                Server integrations
```

## Commands

- `npm run dev` — start the development server on port 4028
- `npm run build` — create a production build
- `npm run start` — serve the production build on port 4028
- `npm run lint` — check code quality
- `npm run type-check` — check TypeScript types
- `npm run format` — format source files with Prettier
