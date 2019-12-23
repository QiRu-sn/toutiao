import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBigInt from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 获取token
  let token = window.localStorage.getItem('token')
  // 统一设置请求头参数Authorization
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function () {})

// 处理数据失真问题
axios.defaults.transformResponse = [function (data) {
  return data ? JSONBigInt.parse(data) : {}
}]

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 响应数据处理
  return response.data ? response.data : {}
}, function (err) {
  let status = err.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 401:
      message = 'token过期或未上传'
      window.localStorage.removeItem('token')
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
})

export default axios
