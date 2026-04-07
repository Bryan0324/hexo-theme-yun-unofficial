// Site-wide configuration. Edit these values for your blog.
export const SITE_CONFIG = {
  title: 'Yun',
  author: 'YunYouJun',
  description: '☁️ A fast & light & lovely blog.',
  language: 'zh-CN',
  favicon: '/yun.svg',

  // Theme color mode: 'light' | 'dark' | 'auto' | 'time' | 'sunset'
  mode: 'auto' as 'light' | 'dark' | 'auto' | 'time' | 'sunset',

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

  avatar: {
    enable: true,
    url: '/yun.png',
    rounded: true,
    opacity: 1,
  },

  banner: {
    enable: true,
    goDown: {
      enable: true,
      icon: 'ri:arrow-down-line',
    },
  },

  sidebar: {
    bgImage:
      'https://cdn.yunyoujun.cn/img/bg/alpha-stars-timing-1.webp',
    bgPosition: 'bottom 1rem center',
  },

  menu: {
    home: { path: '/', icon: 'ri:home-4-line', title: '主页' },
    list: [
      { path: '/archives/', icon: 'ri:archive-line', type: 'archives', title: '归档' },
      { path: '/categories/', icon: 'ri:folder-2-line', type: 'categories', title: '分类' },
      { path: '/tags/', icon: 'ri:price-tag-3-line', type: 'tags', title: '标签' },
    ],
  },

  social: [] as Array<{ name: string; link: string; icon: string; color: string }>,

  footer: {
    since: 2024,
    powered: true,
    icon: { name: 'ri:heart-line', url: '', title: '爱' },
    beian: { enable: false, icp: '' },
  },

  toc: {
    listNumber: true,
    maxDepth: 6,
    minDepth: 1,
    collapse: true,
  },

  modeToggle: { enable: true },
};

export type SiteConfig = typeof SITE_CONFIG;
