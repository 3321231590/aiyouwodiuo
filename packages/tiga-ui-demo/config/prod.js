module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    // 本地跑 demo
    // publicPath: './',
    // ci 打包，静态资源上传
    publicPath: '//pages.anjukestatic.com/fe/hbg_ajk_tiga_ui',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      pxtransform: {
        enable: false
      },
      './crossPlatformComments': {
        enable: true,
        config: {
          platform: 'h5'
        }
      }
    }
  }
}
