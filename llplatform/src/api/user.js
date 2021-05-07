import { request } from '../utils/request'
import staticRouter from '@/router/staticRouter'

export const requestLogin = params => {
  return request('/api/user/login', params).then(data => {
    localStorage.setItem('user-token', JSON.stringify(data.token))
    return data
  })
}

export const requestRegister = params => {
  return request('/api/user/register', params)
}

export const requestUserInfo = params => {
  return request('/api/user/info', params, {
    'method': 'get',
    timeout: 5000
  })
    .then(res => {
      console.log('res.permissions', res.permissions)
      const filterUserMenu = function (menus, accessMenu) {
        menus.forEach(function (m) {
          if (m.noMenu) {
            return
          }
          if (m.children) {
            let subMenu = []
            // m.children说明当前路由还有子路由，继续递归
            filterUserMenu(m.children, subMenu)
            // 递归后，如果子路由组装后存在值，则将子路由的值合并到当前路由的children，并将当前路由push到最终accessMenu中
            if (subMenu.length > 0) {
              let _aMenu = Object.assign({}, m)
              _aMenu.children = subMenu
              accessMenu.push(_aMenu)
            }
            // console.log('menus', menus) // 获取导航栏菜单
          } else {
            // 递归遍历菜单，筛选有权限的菜单
            res.permissions.some(p => p.name === m.name) && accessMenu.push(m)
          }
        })
      }
      let accessMenu = []
      let menus = []
      console.log('staticRouter', staticRouter)
      // 遍历静态路由--获取菜单数据
      staticRouter.forEach(r => {
        menus = r.menu ? menus.concat(r.children) : menus
      })
      console.log('menus', menus) // 获取导航栏菜单
      // 递归遍历菜单---根据权限过滤菜单
      filterUserMenu(menus, accessMenu)
      res.accessMenu = accessMenu
      console.log('组装后的菜单', accessMenu)
      console.log('res接口返回', res)
      return res
    })
}

export const requestLogout = params => {
  return request('/api/user/logout', params)
}

export const requestChangePassword = params => {
  return request('/api/user/changePassword', params)
}

export const requestUserQuery = params => {
  return request('/api/user/query', params)
}

export const requestPermissionsQuery = params => {
  return request('/api/user/permissions', params)
}
