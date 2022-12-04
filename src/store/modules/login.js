import storage from '@/utils/storage.js'
import { login, queryUserInfo } from '@/apis/login/index.js'

const TIME_STAMP_KEY = 'TOUTIAO_TIME_STAMP'
const TOKEN_INFO_KEY = 'TOUTIAO_TOKEN_INFO'
const USER_INFO_KEY = 'TOUTIAO_TOKEN_INFO'

const state = {
  tokenInfo: storage.getItem(TOKEN_INFO_KEY),
  userInfo: storage.getItem(USER_INFO_KEY)
}
const mutations = {
  setTokenInfo(state, params) {
    state.tokenInfo = params
  },
  removeTokenInfo(state) {
    state.tokenInfo = null
  },
  setUserInfo(state, params) {
    state.userInfo = params
  },
  removeUserInfo(state) {
    state.userInfo = null
  }
}
const actions = {
  async login(context, params) {
    const result = await login(params)
    storage.setItem(TIME_STAMP_KEY, Date.now())
    storage.setItem(TOKEN_INFO_KEY, result)
    context.commit('setTokenInfo', result)
  },
  async queryUserInfo(context, params) {
    const result = await queryUserInfo(params)
    storage.setItem(USER_INFO_KEY, result)
    context.commit('setUserInfo', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
