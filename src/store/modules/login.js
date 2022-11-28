import storage from '@/utils/storage.js'
import { login } from '@/apis/login/index.js'

const TIME_STAMP_KEY = 'TOUTIAO_TIME_STAMP'
const TOKEN_INFO_KEY = 'TOUTIAO_TOKEN_INFO'

const state = {
  tokenInfo: storage.getItem(TOKEN_INFO_KEY)
}
const mutations = {
  setTokenInfo(state, tokenInfo) {
    state.tokenInfo = tokenInfo
  },
  removeTokenInfo(state) {
    state.tokenInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setTokenInfo', result.data)
    storage.setItem(TIME_STAMP_KEY, Date.now())
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
