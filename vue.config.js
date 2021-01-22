const path = require('path')

// const isProductionEnvFlag = process.env.NODE_ENV === 'production'

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.scss'),
        path.resolve(__dirname, './src/assets/styles/mixins.scss')
      ],
    })
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
  },
}
