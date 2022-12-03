module.exports = {
  // 是否在开发过程中使用 eslint-loader 执行 lint-on-save。
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '黑马头条'
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
        target: 'http://ttapi.research.itcast.cn',
        // 支持 websocket 请求的代理。
        ws: true,
        // 代理服务器转发请求时请求头中的 host 值是否伪装。
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    },
    // 在发送请求时，会先在 before 指定的函数中进行处理；如果 before 中没有对应的接口处理逻辑，则会请求服务器的真实接口。
    before: require('./src/mock/index.js')
  }
}
