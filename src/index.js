/**
 * Docusaurus Theme Yun
 * Converted from hexo-theme-yun
 * 
 * A fast & light & lovely theme for Docusaurus
 * 
 * This theme extends @docusaurus/theme-classic
 */

const path = require('path');

module.exports = function themeYun(context, options = {}) {
  return {
    name: 'docusaurus-theme-yun',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getTypeScriptThemePath() {
      return path.resolve(__dirname, './theme');
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
            // This allows components to import from @theme-original
            '@theme-original': path.resolve(
              require.resolve('@docusaurus/theme-classic/lib/index.js'),
              '../theme'
            ),
          },
        },
      };
    },

    getDefaultCodeTranslationMessages() {
      return require('./translations/defaultMessages.json');
    },
  };
};
