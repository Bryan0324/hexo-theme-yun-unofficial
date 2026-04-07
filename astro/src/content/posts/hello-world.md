---
title: Hello, Yun Astro!
date: 2024-01-01
description: Welcome to Yun – the Astro version of hexo-theme-yun.
tags:
  - Astro
  - Welcome
categories:
  - Blog
---

# Hello, Yun Astro! ☁️

Welcome to the **Astro** version of [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun).

This is a minimal, fast, and beautiful blog theme powered by [Astro](https://astro.build).

## Features

- 🌙 Light / Dark / Sunset theme modes
- 📁 Categories & Tags pages
- 📅 Archives page
- 🎨 Customizable via `src/config.ts`
- ⚡ Zero-JS by default – scripts only where needed
- 🔍 SEO-friendly with sitemap & Open Graph

## Writing posts

Add `.md` or `.mdx` files to `src/content/posts/`:

```yaml
---
title: My Post Title
date: 2024-06-15
tags: [Astro, Blog]
categories: [Tech]
description: Short summary shown on the list page.
---

Your content here...
```

## Code highlighting

```ts
const greet = (name: string) => `Hello, ${name}!`;
console.log(greet('Yun'));
```

Enjoy writing! 🎉
