import request from '@/utils/request'

export function getPostInfo (params) {
  return request({
    url: '/student/studentMember/postinfo',
    method: 'get',
    params: params
  })
}
