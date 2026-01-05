# Installation Guide

Complete guide to installing and configuring docusaurus-theme-yun.

## Prerequisites

Before you begin, ensure you have:
- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager
- An existing Docusaurus v3 site or a new project

## Installation Methods

### Method 1: New Docusaurus Site with Theme Yun

#### Step 1: Create a new Docusaurus site

```bash
npx create-docusaurus@latest my-website classic
cd my-website
```

#### Step 2: Install Theme Yun

```bash
npm install docusaurus-theme-yun
```

#### Step 3: Configure the theme

Edit `docusaurus.config.js`:

```javascript
module.exports = {
  title: 'My Site',
  tagline: 'Powered by Theme Yun',
  url: 'https://your-site.com',
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
      },
      banner: {
        enable: true,
        title: 'My Site',
      },
    },
    // ... rest of config
  },
};
```

#### Step 4: Add required assets

Create the following files in your `static` directory:
- `/static/yun.png` - Your avatar image
- `/static/yun.svg` - Your favicon

#### Step 5: Start the development server

```bash
npm start
```

Your site should now be running at `http://localhost:3000` with Theme Yun!

### Method 2: Add to Existing Docusaurus Site

#### Step 1: Install the theme

```bash
npm install docusaurus-theme-yun
```

#### Step 2: Update your configuration

Add to `docusaurus.config.js`:

```javascript
module.exports = {
  // ... existing config
  themes: ['docusaurus-theme-yun'],
  themeConfig: {
    // ... existing themeConfig
    yun: {
      // Theme Yun specific config
      mode: 'auto',
      colors: {
        primary: '#0078E7',
      },
    },
  },
};
```

#### Step 3: Customize as needed

See the [Configuration Guide](#configuration) for all available options.

## Configuration

### Minimal Configuration

The bare minimum to get started:

```javascript
themeConfig: {
  yun: {
    mode: 'light',
  },
}
```

### Recommended Configuration

A good starting point with common features:

```javascript
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
      subtitle: 'A beautiful blog',
    },
    features: {
      smoothScroll: true,
      codeblock: {
        copyBtn: true,
      },
    },
  },
}
```

### Full Configuration

See [docusaurus.config.example.js](../docusaurus.config.example.js) for all available options.

## Directory Structure

After installation, your project should look like this:

```
my-website/
├── blog/
│   └── *.md
├── docs/
│   └── *.md
├── src/
│   ├── components/
│   ├── css/
│   │   └── custom.css
│   └── pages/
├── static/
│   ├── img/
│   │   ├── avatar.png
│   │   └── banner.jpg
│   ├── yun.png
│   └── yun.svg
├── docusaurus.config.js
├── package.json
└── sidebars.js
```

## Customization

### Custom CSS

Override theme styles by adding to `src/css/custom.css`:

```css
:root {
  --yun-primary-color: #your-color;
  --yun-bg-color: #your-bg;
}
```

### Custom Components

To customize theme components, use Docusaurus swizzling:

```bash
# List available components
npm run swizzle docusaurus-theme-yun -- --list

# Eject a component for full customization
npm run swizzle docusaurus-theme-yun ComponentName -- --eject

# Wrap a component to extend it
npm run swizzle docusaurus-theme-yun ComponentName -- --wrap
```

## Verification

After installation, verify everything is working:

1. ✅ Site loads without errors
2. ✅ Theme mode toggle appears
3. ✅ Navigation works
4. ✅ Images display correctly
5. ✅ Code blocks have copy button
6. ✅ Responsive design works on mobile

## Troubleshooting

### Theme not loading

**Problem:** The theme doesn't seem to apply.

**Solution:** 
- Ensure `docusaurus-theme-yun` is in the `themes` array
- Clear the `.docusaurus` cache: `rm -rf .docusaurus`
- Restart the dev server

### Images not showing

**Problem:** Avatar or banner images don't display.

**Solution:**
- Check that images are in the `static` directory
- Use paths starting with `/` (e.g., `/img/avatar.png`)
- Verify image file names match configuration

### Build errors

**Problem:** Build fails with errors.

**Solution:**
- Check Node.js version (must be 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for conflicting plugins

### Styling issues

**Problem:** Custom styles not applying.

**Solution:**
- Ensure CSS custom properties are defined in `:root`
- Check CSS specificity
- Clear browser cache

## Next Steps

- [Configuration Guide](./configuration.md) - Detailed configuration options
- [Migration Guide](./migration.md) - Migrate from Hexo
- [Customization Guide](./customization.md) - Advanced customization
- [Deployment Guide](./deployment.md) - Deploy your site

## Getting Help

If you encounter issues:
- Check the [FAQ](./faq.md)
- Search [existing issues](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues)
- Ask in [Discussions](https://github.com/Bryan0324/hexo-theme-yun-unofficial/discussions)
- Create a [new issue](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues/new)

## Version Compatibility

| Theme Version | Docusaurus Version | Node.js Version |
|--------------|-------------------|-----------------|
| 2.x          | ^3.0.0            | >=18.0.0       |

## Upgrade Guide

When a new version is released:

```bash
npm update docusaurus-theme-yun
```

Check the [CHANGELOG](../CHANGELOG.md) for breaking changes.
