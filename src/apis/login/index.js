import request from '@/utils/request'

export function sendSms(mobile) {
  return request(`/v1_0/sms/codes/${mobile}`, 'GET')
}

export function login(params) {
  return request('/v1_0/authorizations', 'POST', params)
}

export function queryUserInfo(params) {
  return request('/v1_0/user/profile', 'GET', params)
}
