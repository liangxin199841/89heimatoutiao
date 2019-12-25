// 权限拦截 导航守卫
import router from '../router'
// 全局前置守卫
router.beforeEach(function (to, from, next) {
  // 拦截谁 判断拦截地址
  if (to.path !== '/login') {
    // 进行权限判断 判断有无token 如果有token放过 如果没有 回到登录页
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放过
      next()
    } else {
      next('/login')// 强制跳转到登录页
    }
  } else {
    next()// 直接放行
  }
})
