import request from '../utils/request'
import { API_USER, API_USERIMG } from '../constant/API'
export function getUser (method, data) {
  return request({
    url: API_USER,
    method,
    data
  })
}
export function getUserImg (method, params, data, id) {
  return request({
    url: id ? API_USERIMG + `/${id}` : API_USERIMG,
    params,
    method,
    data
  })
}
