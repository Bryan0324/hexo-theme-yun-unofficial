# Example Site Structure

This document shows how to organize your Docusaurus site using Theme Yun.

## Directory Structure

```
my-website/
├── blog/                          # Blog posts
│   ├── 2024-01-01-first-post.md
│   ├── 2024-01-02-second-post.md
│   └── authors.yml
├── docs/                          # Documentation
│   ├── intro.md
│   ├── tutorial/
│   │   ├── basics.md
│   │   └── advanced.md
│   └── api/
│       └── reference.md
├── src/
│   ├── components/               # Custom React components
│   │   ├── HomepageFeatures/
│   │   └── MyCustomComponent.js
│   ├── css/                     # Custom styles
│   │   └── custom.css
│   └── pages/                   # Standalone pages
│       ├── index.js             # Homepage
│       ├── about.md            # About page
│       └── contact.md          # Contact page
├── static/                      # Static assets
│   ├── img/
│   │   ├── avatar.png          # Your profile image
│   │   ├── banner.jpg          # Homepage banner
│   │   ├── blog/               # Blog post images
│   │   └── docs/               # Documentation images
│   ├── yun.png                 # Theme avatar
│   └── yun.svg                 # Favicon
├── .gitignore
├── docusaurus.config.js        # Main configuration
├── package.json
├── README.md
└── sidebars.js                 # Sidebar configuration
```

## Sample Blog Post

`blog/2024-01-01-welcome.md`:

```markdown
---
title: Welcome to My Blog
date: 2024-01-01
authors: [yourname]
tags: [hello, docusaurus, theme-yun]
description: My first post using Docusaurus Theme Yun
image: /img/blog/welcome-banner.jpg
---

# Welcome!

This is my first blog post using **Docusaurus Theme Yun**.

<!--truncate-->

## Features I Love

- Beautiful design
- Dark mode support
- Sunset mode 🌅
- Fast performance

## Code Example

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('World'));
```

That's all for now!
```

## Sample Documentation Page

`docs/intro.md`:

```markdown
---
sidebar_position: 1
title: Introduction
---

# Introduction

Welcome to the documentation.

## Getting Started

Follow these steps to get started...

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
npm install
\`\`\`

## Next Steps

- [Tutorial](./tutorial/basics)
- [API Reference](./api/reference)
```

## Custom Homepage

`src/pages/index.js`:

```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Banner from '@theme/components/Banner';
import PostCard from '@theme/components/PostCard';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {yun} = siteConfig.themeConfig;

  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Description for homepage">
      
      {/* Banner with theme config */}
      <Banner 
        title={yun.banner?.title || siteConfig.title}
        subtitle={yun.banner?.subtitle || siteConfig.tagline}
        backgroundImage={yun.banner?.backgroundImage}
      />

      <main>
        <section style={{padding: '2rem'}}>
          <div className="container">
            <h2>Recent Posts</h2>
            {/* Your recent posts here */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
```

## Custom About Page

`src/pages/about.md`:

```markdown
---
title: About Me
description: Learn more about me
---

# About Me

👋 Hi! I'm a developer who loves building beautiful websites.

## Skills

- React
- TypeScript
- Docusaurus
- Web Design

## Contact

- GitHub: [@yourname](https://github.com/yourname)
- Twitter: [@yourname](https://twitter.com/yourname)
- Email: your@email.com
```

## Configuration Example

`docusaurus.config.js`:

```javascript
const config = {
  title: 'My Awesome Site',
  tagline: 'Built with Theme Yun',
  url: 'https://your-domain.com',
  baseUrl: '/',
  
  themes: ['docusaurus-theme-yun'],

  themeConfig: {
    yun: {
      mode: 'auto',
      colors: {
        primary: '#0078E7',
      },
      avatar: {
        enable: true,
        url: '/img/avatar.png',
        rounded: true,
      },
      banner: {
        enable: true,
        title: 'Welcome to My Site',
        subtitle: 'A beautiful blog powered by Docusaurus',
        backgroundImage: '/img/banner.jpg',
      },
      social: [
        {
          name: 'GitHub',
          link: 'https://github.com/yourname',
          icon: '📦',
          color: '#6e5494',
        },
      ],
      features: {
        smoothScroll: true,
        codeblock: {
          copyBtn: true,
        },
        fireworks: {
          enable: true,
        },
      },
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/yourname'},
          ],
        },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
```

## Sidebar Configuration

`sidebars.js`:

```javascript
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial/basics', 'tutorial/advanced'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/reference'],
    },
  ],
};

module.exports = sidebars;
```

## Custom CSS

`src/css/custom.css`:

```css
/* Your custom styles */
:root {
  /* Override theme colors */
  --yun-primary-color: #your-color;
}

/* Custom styles for your content */
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
}
```

## Authors Configuration

`blog/authors.yml`:

```yaml
yourname:
  name: Your Name
  title: Developer & Blogger
  url: https://github.com/yourname
  image_url: /img/avatar.png
  socials:
    github: yourname
    twitter: yourname
```

## Package.json Scripts

```json
{
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

## Development Workflow

1. **Start development server**:
   ```bash
   npm start
   ```

2. **Create a new blog post**:
   ```bash
   touch blog/2024-01-05-new-post.md
   ```

3. **Add images**:
   - Place in `static/img/`
   - Reference as `/img/your-image.jpg`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run serve
   ```

## Tips

- Use frontmatter in markdown for metadata
- Organize images by category (blog, docs, etc.)
- Keep static assets in the `static` directory
- Use components from `@theme` for consistency
- Test responsive design during development
- Clear cache if you see stale content: `npm run clear`

## Next Steps

- [Deployment Guide](./deployment.md)
- [Customization Guide](./customization.md)
- [API Reference](./api-reference.md)
