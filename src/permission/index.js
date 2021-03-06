// 导航守卫
import router from '../router'
import progress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach(function (to, from, next) {
  // 打开进度条
  progress.start()
  // 判断主页所有页面均需要拦截
  if (to.path.startsWith('/home')) {
    // 获取token
    let token = window.localStorage.getItem('token')
    // 如果token存在，则放行，进入主页
    if (token) {
      next()
    } else {
      // 如果token不存在，则拦截，跳转至登录页
      next('/login')
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  // 关闭进度条
  progress.done()
})
export default router
