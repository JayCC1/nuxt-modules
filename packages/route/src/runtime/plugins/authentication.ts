import { defineNuxtPlugin, addRouteMiddleware, navigateTo, useCookie } from '#app'
import nuxtRoute from '#build/spruce-module-route.mjs'

import type { CookieOptions } from '#app'

/**
 * @function
 * @param {string} to 待验证路由
 * @param {string} authPath 待匹配路由
 * @returns {string[]} 返回匹配成功的路由
 */

const verifyPath = (to: string, authPath: string[]): string[] => {
  return authPath.filter((item) => {
    if (item.endsWith('/')) {
      return `${to}/`.startsWith(item)
    }
    return to === item
  })
}

export default defineNuxtPlugin(() => {
  /**
   * 定义全局路由中间件
   * -------------------------- */
  addRouteMiddleware(
    'authentication-middleware-global',
    (to) => {
      /**
       * 拦截条件
       * - cookie 中不存在 token
       * - 待进入的路由需要鉴权
       *
       * 满足以上条件则跳转到登录页面
       * -------------------------- */
      if (!useCookie('access_token').value && verifyPath(to.path, nuxtRoute.authPath).length > 0) {
        useCookie('next_path').value = to.path

        return navigateTo(nuxtRoute.loginPath)
      }
    },
    { global: true },
  )

  /**
   * @function
   * @param {string} token 用户token
   * @param {CookieOptions} options useCookie 的 options
   */
  const loginSuccess = (token: string, options?: CookieOptions) => {
    const cookieName = useCookie(nuxtRoute.cookieName, options)
    const nextPath = useCookie<string>('next_path', { maxAge: 10 })
    let toFullPath = nextPath.value

    toFullPath = verifyPath(toFullPath, nuxtRoute.excludePath).length > 0 ? '/' : toFullPath

    cookieName.value = token
    nextPath.value = ''

    return navigateTo(toFullPath)
  }

  return {
    provide: {
      loginSuccess,
    },
  }
})
