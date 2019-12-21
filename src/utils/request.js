import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 请求之前拦截
axios.interceptors.request.use(function (config) {
  // 获取token
  let token = window.localStorage.getItem('token')
  // 统一设置请求头参数Authorization
  config.headers['Authorization'] = `Bearer ${token}`
  console.log(config)

  return config
}, function () {})

export default axios
