module.exports = {
  // 是否在开发过程中使用 eslint-loader 执行 lint-on-save。
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
    host: 'localhost',
    // 端口号的配置。
    port: 8080,
    // 自动打开浏览器。
    open: true,
    // 配置请求的代理服务器，解决开发阶段的跨域问题。
    proxy: {
      '/dev-api': {
        // 目标服务器的地址。
        // 测试 Axios 请求的目标服务器地址。
        target: 'http://ihrm-java.itheima.net/api',
        // 支持 websocket 请求的代理。
        ws: true,
        // 代理服务器转发请求时请求头中的 host 值是否伪装。
        changeOrigin: true,
        // localhost:8080/dev-api/login ==> http://......:8080/login
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  }
}
