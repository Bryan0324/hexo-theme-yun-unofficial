/**
 * Docusaurus Theme Yun
 * Converted from hexo-theme-yun
 * 
 * A fast & light & lovely theme for Docusaurus
 */

const path = require('path');

module.exports = function themeYun(context, options) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;

  return {
    name: 'docusaurus-theme-yun',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getTypeScriptThemePath() {
      return path.resolve(__dirname, '..', 'src', 'theme');
    },

    getClientModules() {
      return [
        path.resolve(__dirname, './css/custom.css'),
      ];
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@theme-original': path.resolve(__dirname, './theme'),
          },
        },
      };
    },

    getDefaultCodeTranslationMessages() {
      return require('./translations/defaultMessages.json');
    },
  };
};
