# Frequently Asked Questions (FAQ)

Common questions and answers about Docusaurus Theme Yun.

## General Questions

### What is Docusaurus Theme Yun?

Docusaurus Theme Yun is a beautiful, feature-rich theme for Docusaurus v3, converted from the popular hexo-theme-yun. It brings elegant design, multiple theme modes (including a unique sunset mode), and extensive customization options to Docusaurus.

### Is this theme free?

Yes! The theme is open source and licensed under MIT, meaning you can use it freely for personal and commercial projects.

### Can I use this with an existing Docusaurus site?

Absolutely! You can add this theme to any existing Docusaurus v3 site. See the [Installation Guide](./installation.md) for details.

## Installation & Setup

### What are the requirements?

- Node.js 18.0 or higher
- Docusaurus v3.0.0 or higher
- npm, yarn, or pnpm

### How do I install the theme?

```bash
npm install docusaurus-theme-yun
```

Then add to your `docusaurus.config.js`:

```javascript
themes: ['docusaurus-theme-yun']
```

See the full [Installation Guide](./installation.md) for details.

### The theme isn't working after installation. What should I do?

1. Clear the cache: `rm -rf .docusaurus`
2. Restart the dev server: `npm start`
3. Check that the theme is in the `themes` array in `docusaurus.config.js`
4. Verify you're using Docusaurus v3

## Configuration

### How do I change the primary color?

In `docusaurus.config.js`:

```javascript
themeConfig: {
  yun: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

### How do I enable sunset mode?

Set the mode to 'sunset' or 'auto':

```javascript
themeConfig: {
  yun: {
    mode: 'sunset', // or 'auto' for time-based switching
  },
}
```

### Can I customize the theme colors?

Yes! You can customize all colors through the theme config:

```javascript
themeConfig: {
  yun: {
    colors: {
      primary: '#0078E7',
      bg: '#f5f5f5',
      selectionBg: '#8e71c1',
      dark: {
        block: '#1b1f2e',
      },
      sunset: {
        primary: '#FF6B6B',
        bg: '#FFF5E6',
        // ... more sunset colors
      },
    },
  },
}
```

### How do I disable specific features?

Each feature can be disabled in the config:

```javascript
themeConfig: {
  yun: {
    features: {
      fireworks: {
        enable: false, // Disable fireworks
      },
      smoothScroll: false, // Disable smooth scroll
    },
  },
}
```

## Features

### What is sunset mode?

Sunset mode is a unique warm evening color palette with orange and pink tones, perfect for that golden hour feeling. It can be activated manually or automatically during evening hours (17:00-20:00) when using auto mode.

### How does auto mode work?

Auto mode automatically switches themes based on time:
- 07:00-17:00: Light mode
- 17:00-20:00: Sunset mode
- 20:00-07:00: Dark mode

### Can I add custom social links?

Yes! Add them to your theme config:

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
      // Add more...
    ],
  },
}
```

### How do I enable the reward/donate section?

Configure it in your theme config:

```javascript
themeConfig: {
  yun: {
    reward: {
      enable: true,
      icon: '💰',
      comment: "Support my work!",
      methods: [
        {
          name: 'PayPal',
          link: 'https://paypal.me/username',
          color: '#2D70B5',
        },
      ],
    },
  },
}
```

### Does the theme support comments?

The theme is compatible with Docusaurus comment plugins. You can integrate:
- Giscus
- Utterances
- Disqus
- Custom comment systems

## Customization

### Can I override the theme styles?

Yes! Create a custom CSS file and use CSS custom properties:

```css
:root {
  --yun-primary-color: #your-color;
  --yun-bg-color: #your-bg;
}
```

### How do I customize components?

Use Docusaurus swizzling:

```bash
npm run swizzle docusaurus-theme-yun ComponentName
```

### Can I use my own fonts?

Yes! Add font imports to your custom CSS and update the font variables:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');

:root {
  --yun-font-sans-serif: 'Your Font', sans-serif;
}
```

## Migration

### How do I migrate from Hexo?

See our detailed [Migration Guide](./migration.md) which covers:
- Content migration
- Configuration conversion
- Asset organization
- Plugin equivalents

### Will my Hexo content work directly?

Markdown content is largely compatible, but you'll need to:
1. Update front matter format
2. Adjust image paths
3. Update internal links
4. Modify plugin-specific syntax

## Troubleshooting

### Images aren't loading

- Ensure images are in the `static` directory
- Use absolute paths starting with `/` (e.g., `/img/photo.jpg`)
- Check image file names match exactly

### Theme mode toggle isn't appearing

Check that:
1. The theme is properly installed
2. The Layout component is rendering
3. No CSS conflicts are hiding it

### Build fails with errors

- Update to latest Node.js 18+ LTS
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Docusaurus cache: `rm -rf .docusaurus`
- Check for conflicting plugins

### Styles look broken

- Clear browser cache
- Check if custom CSS has conflicts
- Verify CSS custom properties are defined
- Inspect browser console for errors

### Fireworks not working

Check that:
1. Fireworks are enabled in config
2. Canvas element is rendering
3. No JavaScript errors in console
4. Browser supports Canvas API

## Performance

### Will this theme slow down my site?

No! The theme is designed to be lightweight and performant:
- CSS custom properties (no runtime CSS-in-JS)
- Optimized animations
- Lazy loading support
- Minimal JavaScript

### Can I optimize the theme further?

Yes:
- Disable unused features
- Optimize images
- Use production build for deployment
- Enable lazy loading

## Compatibility

### Which browsers are supported?

Modern browsers:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Does it work on mobile?

Yes! The theme is fully responsive and optimized for:
- Mobile phones
- Tablets
- Desktop screens

### Is it compatible with Docusaurus plugins?

Yes, the theme is compatible with standard Docusaurus plugins for:
- Search (Algolia, local search)
- Analytics (Google Analytics, etc.)
- PWA
- Sitemap
- And more

## Development

### How can I contribute?

See our [Contributing Guide](../CONTRIBUTING.md) for:
- How to submit issues
- Pull request guidelines
- Development setup
- Code style guidelines

### Can I create a plugin for this theme?

Yes! The theme is designed to be extensible. You can:
- Create custom components
- Add new features
- Extend existing functionality
- Share via npm packages

### Where can I get help?

- Check this FAQ
- Read the [documentation](./installation.md)
- Search [GitHub Issues](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues)
- Ask in [Discussions](https://github.com/Bryan0324/hexo-theme-yun-unofficial/discussions)
- Create a new issue

## Licensing

### Can I use this theme commercially?

Yes! The MIT license allows commercial use.

### Do I need to credit the theme?

Not required, but appreciated! You can include a link in your footer.

### Can I modify the theme?

Yes, you can modify it as needed under the MIT license terms.

## Still Have Questions?

If your question isn't answered here:
1. Search [closed issues](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues?q=is%3Aissue+is%3Aclosed)
2. Ask in [Discussions](https://github.com/Bryan0324/hexo-theme-yun-unofficial/discussions)
3. Open a [new issue](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues/new)

We're here to help! 🌟
