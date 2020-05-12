const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(() => ({
        extract: true, // Enables SVG extraction when running in production mode
        spriteFilename: () => 'svg-sprites.svg'
      }))
  },
  configureWebpack: {
    plugins: [
      new SpriteLoaderPlugin() // Required if `extract` is set to `true`
    ]
  }
}
