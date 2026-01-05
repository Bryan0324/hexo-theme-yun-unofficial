# Migration Guide: Hexo to Docusaurus Theme Yun

This guide will help you migrate from hexo-theme-yun to docusaurus-theme-yun.

## Overview

Migrating from Hexo to Docusaurus involves several key steps:
1. Content migration
2. Configuration conversion
3. Asset organization
4. Plugin equivalents
5. Custom modifications

## 1. Content Migration

### Blog Posts

Hexo and Docusaurus use similar markdown formats, but there are some differences in front matter.

**Hexo Front Matter:**
```yaml
---
title: My Post
date: 2023-01-01
tags:
  - tag1
  - tag2
categories:
  - category1
---
```

**Docusaurus Front Matter:**
```yaml
---
title: My Post
date: 2023-01-01
tags: [tag1, tag2]
authors: [author-id]
---
```

### Pages

Move your Hexo pages from `source/` to Docusaurus structure:
- `source/about/index.md` → `docs/about.md` or `src/pages/about.md`

## 2. Configuration Conversion

### Basic Settings

**Hexo (_config.yml):**
```yaml
mode: auto
colors:
  primary: "#0078E7"
avatar:
  enable: true
  url: /yun.png
```

**Docusaurus (docusaurus.config.js):**
```javascript
themeConfig: {
  yun: {
    mode: 'auto',
    colors: {
      primary: '#0078E7',
    },
    avatar: {
      enable: true,
      url: '/yun.png',
    },
  },
}
```

### Menu/Navigation

**Hexo:**
```yaml
menu:
  home:
    path: /
    icon: ri:home-4-line
  list:
    - type: archives
      path: /archives/
```

**Docusaurus:**
```javascript
navbar: {
  items: [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Archives' },
  ],
}
```

### Social Links

**Hexo:**
```yaml
social:
  - name: GitHub
    link: https://github.com/username
    icon: ri:github-line
    color: "#6e5494"
```

**Docusaurus:**
```javascript
themeConfig: {
  yun: {
    social: [
      {
        name: 'GitHub',
        link: 'https://github.com/username',
        icon: '📦',
        color: '#6e5494',
      },
    ],
  },
}
```

## 3. Asset Organization

### Directory Structure

**Hexo:**
```
source/
  ├── images/
  ├── css/
  ├── js/
  └── _posts/
```

**Docusaurus:**
```
static/
  ├── img/
  ├── css/
  └── js/
blog/
  └── *.md
docs/
  └── *.md
```

### Asset References

Update image paths in your markdown:
- Hexo: `/images/photo.jpg`
- Docusaurus: `/img/photo.jpg`

## 4. Plugin Equivalents

### Comments

**Hexo (Waline):**
```yaml
waline:
  enable: true
  serverURL: https://your-domain.vercel.app
```

**Docusaurus:**
```javascript
// Install @docusaurus/plugin-ideal-image or use custom component
// Configuration depends on the comment system chosen
```

### Search

**Hexo:**
```yaml
local_search:
  enable: true
```

**Docusaurus:**
```javascript
// Built-in search or use algolia
presets: [
  [
    '@docusaurus/preset-classic',
    {
      // ... other options
      docs: {
        sidebarPath: './sidebars.js',
      },
    },
  ],
],
```

### Math Equations (KaTeX)

**Hexo:**
```yaml
katex:
  copy_tex: true
  global: false
```

**Docusaurus:**
```javascript
plugins: [
  'docusaurus-plugin-katex',
],
```

Then add to markdown:
```markdown
$$
E = mc^2
$$
```

### Analytics

**Hexo:**
```yaml
google_analytics:
  enable: true
  id: G-XXXXXXXXX
```

**Docusaurus:**
```javascript
presets: [
  [
    '@docusaurus/preset-classic',
    {
      gtag: {
        trackingID: 'G-XXXXXXXXX',
      },
    },
  ],
],
```

## 5. Custom Modifications

### Custom CSS

**Hexo:**
Place in `source/css/_custom.styl`

**Docusaurus:**
```javascript
// docusaurus.config.js
presets: [
  [
    '@docusaurus/preset-classic',
    {
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],
```

### Custom JavaScript

**Hexo:**
```yaml
head:
  js:
    base:
      - /js/custom.js
```

**Docusaurus:**
```javascript
// Create src/theme/Root.js
import React from 'react';

export default function Root({children}) {
  return (
    <>
      {children}
      <script src="/js/custom.js"></script>
    </>
  );
}
```

## 6. Feature Mapping

| Hexo Feature | Docusaurus Equivalent | Status |
|--------------|----------------------|--------|
| Theme modes (light/dark/sunset) | ✅ Supported | Full |
| Banner | ✅ Custom component | Full |
| Avatar | ✅ Custom component | Full |
| Social links | ✅ Theme config | Full |
| Code copy button | ✅ Built-in | Full |
| Smooth scroll | ✅ CSS | Full |
| Fireworks | ✅ Custom component | Full |
| Reward/Donate | ✅ Custom component | Full |
| Creative Commons | ✅ Custom component | Full |
| Comments | ⚠️ Plugin needed | Partial |
| Search | ✅ Built-in/Algolia | Full |

## 7. Testing Your Migration

After migration, verify:

1. ✅ All pages render correctly
2. ✅ Navigation works
3. ✅ Images display properly
4. ✅ Theme modes switch correctly
5. ✅ Code blocks have syntax highlighting
6. ✅ Links are not broken
7. ✅ Mobile responsive design works

## 8. Build and Deploy

### Build your site:
```bash
npm run build
```

### Test production build:
```bash
npm run serve
```

### Deploy (example for GitHub Pages):
```bash
npm run deploy
```

## Common Issues

### Issue: Images not loading
**Solution:** Move images to `static/img/` and update paths

### Issue: Links broken
**Solution:** Update internal links to use Docusaurus routing

### Issue: Front matter errors
**Solution:** Check front matter format matches Docusaurus requirements

### Issue: Custom CSS not applying
**Solution:** Ensure custom.css is imported in docusaurus.config.js

## Getting Help

- [Docusaurus Documentation](https://docusaurus.io/)
- [Theme Issues](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues)
- [Docusaurus Discord](https://discord.gg/docusaurus)

## Summary

The migration from Hexo to Docusaurus with Theme Yun preserves most of the visual features and functionality while leveraging Docusaurus's modern React-based architecture. While some manual work is required for content and configuration conversion, the end result is a faster, more maintainable site with better SEO and developer experience.
