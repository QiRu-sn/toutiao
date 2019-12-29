import request from '../utils/request'
import { API_CHANNELS, API_ARTICLES } from '../constant/API'
export function getChannels () {
  return request({
    url: API_CHANNELS
  })
}
export function getArticles (id, method, params, data) {
  return request({
    url: id ? API_ARTICLES + `/${id}` : API_ARTICLES,
    method,
    params,
    data
  })
}
