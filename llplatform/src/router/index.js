import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'
import whiteList from './whiteList'
import staticRouter from './staticRouter'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  routes: staticRouter
})

/* 利用router.meta保存数据级权限 */
const routerInit = (permissions) => {
  // console.log('router处理前', router)
  // console.log('permissions', permissions)
  permissions.forEach(function (v) {
    let routeItem = router.match(v.name)
    // console.log('routeItem处理前', routeItem)
    if (routeItem) {
      routeItem.meta.permission = v.permission ? v.permission : []
      // console.log('routeItem处理后', routeItem)
    }
    // console.log(88999999, router)
  })
  // console.log('router处理后', router)
}

/* 检测用户是否有权限访问页面 */
const pagePermission = (permissions, to, next) => {
  const allowPage = permissions.some(function (v) {
    return v.name === to.name
  })
  allowPage ? next() : next({ path: '/error/403' })
}

/* 权限控制 */
router.beforeEach((to, from, next) => {
  /* 取消旧请求 */
  const CancelToken = axios.CancelToken
  router.app.$options.store.state.source.cancel && router.app.$options.store.state.source.cancel()
  router.app.$options.store.commit('updateSource', { source: CancelToken.source() })
  /* 进入登录页面将注销用户信息 */
  if (to.path === '/login') {
    router.app.$options.store.commit('deleteUser')
    localStorage.removeItem('user-token')
  }
  /* 免登录页面 */
  if (whiteList.indexOf(to.fullPath) >= 0) {
    return next()
  }
  // console.log('router.app', router.app)
  let permissions = router.app.$options.store.state.user.permissions
  /* 上次会话结束，重新获取用户信息 */
  if (!permissions.length) {
    /* 获取用户信息和权限 */
    router.app.$options.store.dispatch('requestUserInfo').then(() => {
      permissions = router.app.$options.store.state.user.permissions || []
      // console.log(123456, permissions)
      routerInit(permissions)
      pagePermission(permissions, to, next)
    }).catch((err) => {
      /* 获取用户信息异常 */
      console.error(err)
      return next({ path: '/error/500' })
    })
  } else {
    /* 已登录时判断页面权限 */
    pagePermission(permissions, to, next)
  }
})

export default router
