# Docusaurus Theme Yun

[![npm version](https://img.shields.io/npm/v/docusaurus-theme-yun.svg)](https://www.npmjs.com/package/docusaurus-theme-yun)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

☁️ **A fast & light & lovely theme for Docusaurus v3**

Converted from the popular [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun), this theme brings the elegant and feature-rich design to Docusaurus.

## ✨ Features

- 🎨 **Multiple Theme Modes**: Light, Dark, Auto, and unique Sunset mode
- 🚀 **Fast & Lightweight**: Optimized for performance
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎭 **Beautiful Animations**: Smooth transitions and scroll reveals
- 🎯 **Customizable**: Extensive configuration options
- ⚡ **Modern Stack**: Built with React and Docusaurus v3
- 🎨 **Color Schemes**: Including the unique sunset evening palette
- 🔥 **Special Effects**: Fireworks, custom cursors, and more
- 💬 **Comment Systems**: Support for multiple comment providers
- 🔍 **Search**: Integrated search functionality
- 📊 **Analytics**: Easy integration with analytics services
- 🎵 **Music Player**: Optional APlayer integration
- 🧮 **Math Support**: KaTeX for rendering mathematical formulas

## 📦 Installation

### Using npm

```bash
npm install docusaurus-theme-yun
```

### Using yarn

```bash
yarn add docusaurus-theme-yun
```

### Using pnpm

```bash
pnpm add docusaurus-theme-yun
```

## 🚀 Quick Start

### 1. Add Theme to Your Docusaurus Config

Edit your `docusaurus.config.js`:

```javascript
module.exports = {
  // ... other config
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
        title: 'Your Site Title',
      },
    },
  },
};
```

### 2. Copy Required Assets

Copy the avatar and favicon files to your `static` directory:
- `/static/yun.png` - Default avatar
- `/static/yun.svg` - Default favicon

### 3. Run Your Site

```bash
npm start
```

## ⚙️ Configuration

### Theme Modes

The theme supports four different modes:

```javascript
themeConfig: {
  yun: {
    mode: 'auto', // 'light' | 'dark' | 'auto' | 'sunset'
  },
}
```

- **light**: Light mode (day theme)
- **dark**: Dark mode (night theme)
- **auto**: Automatic switching based on time:
  - 07:00-17:00: Light mode
  - 17:00-20:00: Sunset mode
  - 20:00-07:00: Dark mode
- **sunset**: Beautiful warm evening palette

### Colors

Customize your color scheme:

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
        block: '#FFE8D6',
        text: '#8B4513',
        link: '#FF8E53',
      },
    },
  },
}
```

### Avatar

Configure your profile avatar:

```javascript
themeConfig: {
  yun: {
    avatar: {
      enable: true,
      url: '/img/avatar.png',
      rounded: true,
      opacity: 1,
      status: {
        enable: true,
        emoji: '😊',
        message: 'Always believe good things are about to happen',
      },
    },
  },
}
```

### Banner

Customize the homepage banner:

```javascript
themeConfig: {
  yun: {
    banner: {
      enable: true,
      title: 'Your Site Title',
      subtitle: 'Your tagline',
      backgroundImage: '/img/banner-bg.jpg',
      cloud: {
        enable: true,
        color: 'white',
      },
      goDown: {
        enable: true,
      },
    },
  },
}
```

### Social Links

Add your social media links:

```javascript
themeConfig: {
  yun: {
    social: [
      {
        name: 'GitHub',
        link: 'https://github.com/yourusername',
        icon: '📦',
        color: '#6e5494',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/yourusername',
        icon: '🐦',
        color: '#1da1f2',
      },
    ],
  },
}
```

### Features

Enable or disable various features:

```javascript
themeConfig: {
  yun: {
    features: {
      smoothScroll: true,
      codeblock: {
        copyBtn: true,
      },
      fireworks: {
        enable: true,
        colors: ['102, 167, 221', '62, 131, 225'],
      },
      scrollReveal: {
        enable: true,
        targets: ['.post-card', '.markdown-body img'],
      },
    },
  },
}
```

### Reward/Donate

Add donation options:

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
          link: 'https://paypal.me/yourusername',
          color: '#2D70B5',
          icon: '💳',
        },
      ],
    },
  },
}
```

## 📚 Full Configuration Example

See [docusaurus.config.example.js](./docusaurus.config.example.js) for a complete configuration example with all available options.

## 🔧 Advanced Usage

### Custom CSS

Override theme styles by creating a custom CSS file:

```css
/* src/css/custom.css */
:root {
  --yun-primary-color: #your-color;
}
```

### Swizzling Components

You can customize theme components using Docusaurus swizzling:

```bash
npm run swizzle docusaurus-theme-yun Layout -- --eject
```

## 🎯 Migration from Hexo

If you're migrating from hexo-theme-yun:

1. **Content Migration**: Convert your Hexo markdown files to Docusaurus format
2. **Configuration**: Map your `_config.yml` settings to `docusaurus.config.js`
3. **Assets**: Move images and files to the `static` directory
4. **Plugins**: Find Docusaurus equivalents for Hexo plugins

See our [Migration Guide](./docs/migration.md) for detailed instructions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

[MIT License](./LICENSE)

## 🙏 Credits

- Original theme by [YunYouJun](https://github.com/YunYouJun)
- Converted to Docusaurus by the community
- Built with [Docusaurus](https://docusaurus.io/)

## 🔗 Links

- [Documentation](./docs)
- [GitHub Repository](https://github.com/Bryan0324/hexo-theme-yun-unofficial)
- [Original Hexo Theme](https://github.com/YunYouJun/hexo-theme-yun)
- [Report Issues](https://github.com/Bryan0324/hexo-theme-yun-unofficial/issues)

---

Made with ☁️ and ❤️
