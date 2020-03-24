import request from '@/utils/request'

export function getContent (params) {
  return request({
    url: '/post/app/postContents',
    method: 'get',
    params: params
  })
}
