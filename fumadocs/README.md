# Binance API Node - Fumadocs Documentation

This directory contains a Fumadocs setup for the binance-api-node documentation.

## Setup

The following has been configured:

- ✅ Next.js 16 with App Router
- ✅ Fumadocs UI, Core, and MDX packages installed
- ✅ Basic documentation structure in `content/docs/`
- ✅ Layout and routing configured
- ✅ Tailwind CSS with Fumadocs styling

## Current Status

The basic structure is in place, but there are some API compatibility issues between fumadocs-core@16.0.7 and fumadocs-mdx@13.0.5 that need to be resolved.

### Known Issues

1. Type incompatibility between `loader` from fumadocs-core and the output from fumadocs-mdx
2. The source configuration in `lib/source.ts` needs adjustment

### Next Steps

To fix the setup:

1. Update fumadocs packages to compatible versions:
   ```bash
   npm install fumadocs-mdx@latest fumadocs-core@latest fumadocs-ui@latest
   ```

2. Or refer to the official Fumadocs documentation for the correct API usage:
   - https://fumadocs.vercel.app/docs/ui/mdx

3. Migrate the content from ../README.md into structured MDX files in `content/docs/`

## Structure

```
fumadocs/
├── app/
│   ├── docs/
│   │   ├── [[...slug]]/
│   │   │   └── page.tsx      # Dynamic docs page
│   │   └── layout.tsx         # Docs layout with sidebar
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage (redirects to /docs)
│   └── globals.css            # Global styles
├── content/
│   └── docs/
│       ├── index.mdx          # Documentation homepage
│       └── meta.json          # Sidebar configuration
├── lib/
│   └── source.ts              # Content source configuration
└── source.config.ts           # Fumadocs MDX configuration
```

## Running

Once the compatibility issues are resolved:

```bash
npm run dev    # Development server
npm run build  # Production build
```
