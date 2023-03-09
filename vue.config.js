module.exports = {
  // 部署应用包时的基本 URL。
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: './static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: './template/index.html',
  // 是否在开发过程中使用 eslint-loader 执行 lint-on-save。
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '项目模板'
      return args
    })
  },
  devServer: {
    // URL 的配置。
    host: '0.0.0.0',
    // 端口号的配置。
    port: 8080,
    // 自动打开浏览器。
    open: true,
    // 配置请求的代理服务器，解决开发阶段的跨域问题。
    proxy: {
      '/dev-api': {
        // 目标服务器的地址。
        target: 'http://......',
        // 支持 websocket 请求的代理。
        ws: true,
        // 代理服务器转发请求时请求头中的 host 值是否伪装。
        changeOrigin: true,
        // localhost:8080/dev-api/login ==> http://......:8080/login
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    },
    // 在发送请求时，会先在 before 指定的函数中进行处理；如果 before 中没有对应的接口处理逻辑，则会请求服务器的真实接口。
    before: require('./src/mock/index.js')
  }
}
