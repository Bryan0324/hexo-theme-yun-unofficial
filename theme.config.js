/**
 * Theme configuration utilities for Docusaurus Theme Yun
 */

/**
 * Deep merge utility for nested objects
 */
function deepMerge(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

module.exports = {
  /**
   * Default theme configuration
   */
  defaultConfig: {
    // Theme mode: 'light' | 'dark' | 'auto' | 'sunset'
    mode: 'auto',
    
    // Theme colors
    colors: {
      primary: '#0078E7',
      bg: '#f5f5f5',
      selectionBg: '#8e71c1',
      tagStartColor: '#999999',
      tagEndColor: '#0078E7',
      dark: {
        block: '#1b1f2e',
      },
      sunset: {
        primary: '#FF6B6B',
        bg: '#FFF5E6',
        block: '#FFE8D6',
        text: '#8B4513',
        link: '#FF8E53',
        selectionBg: '#FFB5E8',
        banner: '#FF6B35',
      },
    },

    // Sidebar configuration
    sidebar: {
      bgImage: 'https://cdn.yunyoujun.cn/img/bg/alpha-stars-timing-1.webp',
      bgPosition: 'bottom 1rem center',
    },

    // Avatar configuration
    avatar: {
      enable: true,
      url: '/yun.png',
      rounded: true,
      opacity: 1,
    },

    // Banner configuration
    banner: {
      enable: true,
      title: '云游君的小站',
      border: true,
      cloud: {
        enable: true,
        color: 'white',
      },
      goDown: {
        enable: true,
        icon: 'ri:arrow-down-s-line',
      },
    },

    // Features
    features: {
      smoothScroll: true,
      fireworks: {
        enable: true,
        colors: [],
      },
      scrollReveal: {
        enable: true,
        targets: ['.post-card', '.markdown-body img'],
      },
      codeblock: {
        copyBtn: true,
      },
    },

    // Footer configuration
    footer: {
      since: 2019,
      icon: {
        name: 'ri:cloud-line',
        animated: true,
        color: '#0078E7',
      },
      powered: {
        enable: true,
      },
    },

    // Reward/Donate
    reward: {
      enable: true,
      icon: 'ri:hand-coin-line',
      comment: "I'm so cute. Please give me money.",
      methods: [],
    },

    // Creative Commons
    creativeCommons: {
      license: 'by-nc-sa',
      language: 'deed.zh',
      post: true,
      clipboard: false,
    },
  },

  /**
   * Merge user config with default config using deep merge
   */
  mergeConfig(userConfig = {}) {
    return deepMerge(this.defaultConfig, userConfig);
  },
};
