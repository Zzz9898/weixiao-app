import request from '@/utils/request'

export function getContent (params) {
  return request({
    url: '/post/app/postContents',
    method: 'get',
    params: params
  })
}

export function getChatOff (params) {
  return request({
    url: 'http://192.168.190.234:6004/message/messageContents',
    method: 'get',
    params: params
  })
}

export function batchSign (params) {
  return request({
    url: 'http://192.168.190.234:6004/message/batchsign',
    method: 'put',
    params: params
  })
}
