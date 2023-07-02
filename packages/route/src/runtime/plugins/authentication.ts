import { defineNuxtPlugin, addRouteMiddleware, navigateTo } from '#app'
import nuxtRoute from '#build/spruce-module-route.mjs'

import Cookie from 'js-cookie'

/**
 * @param {string} interceptFullPath 被拦截的路由
 */
let interceptFullPath = ''

/**
 * @param {string} historyFullPath 上一个路由
 */
let historyFullPath = ''

/**
 * @function
 * @param {string} to 待验证路由
 * @param {string} authPath 待匹配路由
 * @returns {string[]} 返回匹配成功的路由
 */

const verifyPath = (to: string, authPath: string[]): string[] => {
  return authPath.filter((item) => {
    if (item.endsWith('/')) {
      return to === item
    }
    item = item.endsWith('/') ? item : `${item}/`
    return to.startsWith(item)
  })
}

export default defineNuxtPlugin(() => {
  /**
   * 定义全局路由中间件
   * -------------------------- */
  addRouteMiddleware(
    'authentication-middleware-global',
    (to, from) => {
      historyFullPath = from.path

      // 重定向到登录页时，仍保留拦截的路由
      if (!(to.path === nuxtRoute.loginPath)) {
        interceptFullPath = ''
      }

      /**
       * 拦截条件
       * - cookie 中不存在 token
       * - 待进入的路由需要鉴权
       *
       * 满足以上条件则跳转到登录页面
       * -------------------------- */
      if (!Cookie.get(nuxtRoute.cookieName) && verifyPath(to.path, nuxtRoute.authPath).length > 0) {
        interceptFullPath = to.fullPath
        return navigateTo(nuxtRoute.loginPath)
      }
    },
    { global: true }
  )

  /**
   * @function
   * @param {string} token 用户token
   */
  const loginSuccess = (token: string) => {
    let toFullPath = interceptFullPath || historyFullPath

    toFullPath = verifyPath(toFullPath, nuxtRoute.excludePath).length > 0 ? '/' : toFullPath

    Cookie.set(nuxtRoute.cookieName, token)

    return navigateTo(toFullPath)
  }

  return {
    provide: {
      loginSuccess,
    },
  }
})
