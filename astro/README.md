# hexo-theme-yun – Astro Version ☁️

A fast, light, and lovely blog theme ported from [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) to **[Astro](https://astro.build)**.

## Getting started

```bash
# Install dependencies
cd astro
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project structure

```
astro/
├── public/               # Static assets (favicon, images)
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Banner.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro
│   │   ├── PostCard.astro
│   │   └── Sidebar.astro
│   ├── content/
│   │   ├── config.ts     # Content collection schema
│   │   └── posts/        # Markdown blog posts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          # Home (post list + banner)
│   │   ├── archives.astro       # All posts by year
│   │   ├── categories/
│   │   │   ├── index.astro      # Category list
│   │   │   └── [category].astro # Posts by category
│   │   ├── posts/
│   │   │   └── [slug].astro     # Single post
│   │   └── tags/
│   │       ├── index.astro      # Tag cloud
│   │       └── [tag].astro      # Posts by tag
│   ├── styles/
│   │   └── global.css    # Global CSS with custom properties
│   └── config.ts         # Site-wide configuration
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Configuration

Edit `src/config.ts` to customise the site:

| Key | Description |
|-----|-------------|
| `title` | Blog title |
| `author` | Author name |
| `description` | Site description |
| `mode` | Theme mode (`auto` / `light` / `dark` / `sunset` / `time`) |
| `colors.primary` | Brand colour |
| `avatar` | Sidebar avatar settings |
| `banner` | Banner / hero section settings |
| `menu` | Navigation links in sidebar |
| `social` | Social media links |
| `footer` | Footer content |

## Writing posts

Create `.md` or `.mdx` files in `src/content/posts/`:

```yaml
---
title: My Post
date: 2024-06-15
tags: [Astro, Blog]
categories: [Tech]
description: Short summary shown on the list page.
top: true        # Pin to top of list
toc: true        # Show table of contents (default: true)
---

Your content here...
```

## Theme modes

The theme supports five display modes:

| Mode | Behaviour |
|------|-----------|
| `light` | Always light |
| `dark` | Always dark |
| `auto` | Follows system preference |
| `sunset` | Warm sunset palette |
| `time` | Auto switches by time of day |

Users can also cycle through modes using the contrast button in the sidebar.

## License

MIT
