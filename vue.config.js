const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new SVGSpritemapPlugin(path.resolve(__dirname, 'src/assets/icons/*.svg'), {
        output: {
          filename: '../public/icon-sprite.svg',
          svg4everybody: true,
          svgo: {
            removeTitle: true,
            removeStyleElement: true,
            cleanupNumericValue: true,
          },
        },
        sprite: {
          prefix: false,
        },
      }),
    ],
  },
};
