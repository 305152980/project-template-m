module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') === -1 ? 75 : 37.5
      },
      propList: ['*']
    }
  }
}
