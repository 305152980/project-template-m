// const Mock = require('mockjs')

module.exports = [
  {
    url: '/dev-api/v1_0/authorizations',
    function: function(req) {
      const data = {
        data: {
          token: 'c7104a1a-47dc-41a4-b223-6faf720f7d39',
          refresh_token: 'f76d7323-dcc5-4920-b400-3066b27813ef'
        },
        message: 'OK'
      }
      this.result = data
    },
    result: null
  },
  {
    url: '/dev-api/v1_0/sms/codes',
    function: function(req) {
      const data = { data: null, message: 'OK' }
      this.result = data
    },
    result: null
  }
]
