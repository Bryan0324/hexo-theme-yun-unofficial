/**
 * Example Docusaurus Configuration for Theme Yun
 * 
 * This is a sample configuration file showing how to use docusaurus-theme-yun.
 * Copy this to your Docusaurus site and customize as needed.
 */

const config = {
  title: '云游君的小站',
  tagline: 'A fast & light & lovely theme',
  url: 'https://your-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/yun.svg',

  // Theme configuration
  themes: ['docusaurus-theme-yun'],

  themeConfig: {
    // Yun theme specific configuration
    yun: {
      // Theme mode: 'light' | 'dark' | 'auto' | 'sunset'
      mode: 'auto',
      
      // Color configuration
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

      // Avatar configuration
      avatar: {
        enable: true,
        url: '/img/yun.png',
        rounded: true,
        opacity: 1,
        status: {
          enable: false,
          emoji: '😊',
          message: '永远相信美好的事情即将发生',
        },
      },

      // Banner configuration
      banner: {
        enable: true,
        title: '云游君的小站',
        subtitle: 'A fast & light & lovely theme',
        backgroundImage: 'https://cdn.yunyoujun.cn/img/bg/stars-timing-0-blur-30px.jpg',
        cloud: {
          enable: true,
          color: 'white',
        },
        goDown: {
          enable: true,
        },
      },

      // Sidebar configuration
      sidebar: {
        bgImage: 'https://cdn.yunyoujun.cn/img/bg/alpha-stars-timing-1.webp',
        bgPosition: 'bottom 1rem center',
      },

      // Social links
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
        // Add more social links as needed
      ],

      // Footer configuration
      footer: {
        since: 2019,
        icon: {
          name: '☁️',
          animated: true,
          color: '#0078E7',
        },
        powered: {
          enable: true,
        },
      },

      // Features
      features: {
        smoothScroll: true,
        codeblock: {
          copyBtn: true,
        },
        fireworks: {
          enable: true,
          colors: [],
        },
        scrollReveal: {
          enable: true,
          targets: ['.post-card', '.markdown-body img'],
        },
      },

      // Reward/Donate configuration
      reward: {
        enable: false,
        icon: '💰',
        comment: "I'm so cute. Please give me money.",
        methods: [
          // {
          //   name: 'PayPal',
          //   link: 'https://paypal.me/yourusername',
          //   color: '#2D70B5',
          //   icon: '💳',
          // },
        ],
      },

      // Creative Commons License
      creativeCommons: {
        license: 'by-nc-sa',
        language: 'deed.en',
        post: true,
        clipboard: false,
      },
    },

    // Standard Docusaurus theme config
    navbar: {
      title: 'Yun Theme',
      logo: {
        alt: 'Yun Logo',
        src: 'img/yun.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/Bryan0324/hexo-theme-yun-unofficial',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Bryan0324/hexo-theme-yun-unofficial',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Theme Yun. Built with Docusaurus.`,
    },

    // Prism theme for code highlighting
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // Plugins
  plugins: [
    // Add KaTeX for math equations if needed
    // 'docusaurus-plugin-sass',
  ],
};

module.exports = config;
