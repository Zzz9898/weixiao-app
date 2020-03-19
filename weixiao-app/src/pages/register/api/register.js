import request from '@/utils/request'

export function canRegister (username) {
  return request({
    url: '/student/canregister',
    method: 'post',
    params: { username }
  })
}

export function register (params) {
  return request({
    url: '/student/register',
    method: 'post',
    params: {
      username: params.username,
      password: params.password
    }
  })
}
