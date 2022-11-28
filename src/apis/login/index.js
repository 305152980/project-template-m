import request from '@/utils/request'

export function login(params) {
  return request('/app/v1_0/authorizations', 'POST', params)
}

export function sendSms(mobile) {
  return request(`/app/v1_0/sms/codes/${mobile}`, 'GET')
}
