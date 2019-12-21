import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求之前拦截
axios.interceptors.request.use(function (config) {
  // 获取token
  let token = window.localStorage.getItem('token')
  // 统一设置请求头参数Authorization
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function () {})

axios.interceptors.response.use(function (response) {
  // 响应数据处理
  return response.data ? response.data : {}
}, function () {})

export default axios
