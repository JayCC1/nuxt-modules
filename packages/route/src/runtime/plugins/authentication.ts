import { defineNuxtPlugin, addRouteMiddleware, navigateTo, useCookie } from '#app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nuxtRoute from '#nuxtRoute'

import type { CookieOptions } from '#app'

/**
 * @Describe 校验路由是否匹配
 * @param {string} to 待验证路由
 * @param {string} authPath 待匹配路由
 * @returns {string[]} 返回匹配成功的路由
 */

const verifyPath = (to: string, authPath: string[]): string[] => {
  const path = to.split('?')[0]
  return authPath.filter((item) => {
    if (item.endsWith('/')) {
      return `${path}/`.startsWith(item)
    }
    return path === item
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
      if (
        !useCookie(`${nuxtRoute.cookieName}`).value &&
        verifyPath(to.path, nuxtRoute.authPath).length > 0
      ) {
        useCookie('next_path').value = to.fullPath

        return navigateTo(nuxtRoute.loginPath)
      }

      /** 登录状态不可访问 excludePath 中定义的路由 */
      if (
        useCookie(`${nuxtRoute.cookieName}`).value &&
        verifyPath(to.path, nuxtRoute.excludePath).length > 0
      ) {
        return navigateTo('/')
      }
    },
    { global: true },
  )

  /**
   * @Describe 记录一个路由地址并跳转到登录页
   * @param {string} fullPath 记录的路由地址
   */
  function toLogin(fullPath: string) {
    const nextPath = useCookie<string>('next_path')
    nextPath.value = fullPath

    return navigateTo(nuxtRoute.loginPath)
  }

  /**
   * @Describe 登录成功后调用
   * @param {string} token 将要写入 cookie 的值， name 为 `nuxtRoute.cookieName`
   * @param {CookieOptions | string} options 当为 object 类型时，作为 useCookie 的 options；当为 string 类型时，作为重定向路由地址
   * @param {string} to 重定向路由地址，该项具有最高优先级
   */
  function loginSuccess(token: string): void
  function loginSuccess(token: string, to: string): void
  function loginSuccess(token: string, options: CookieOptions, to?: string): void
  function loginSuccess(token: string, options?: CookieOptions | string, to?: string) {
    useCookie(`${nuxtRoute.cookieName}`).value = token

    const nextPath = useCookie<string>('next_path', { maxAge: 10 })
    let toPath = to || nextPath.value || '/'

    if (typeof options === 'object') {
      useCookie(`${nuxtRoute.cookieName}`, options).value = token
      toPath = to || toPath
    } else if (typeof options === 'string') {
      toPath = to || options
    }

    toPath = verifyPath(toPath, nuxtRoute.excludePath).length > 0 ? '/' : toPath

    nextPath.value = ''
    return navigateTo(toPath)
  }

  return {
    provide: {
      toLogin,
      loginSuccess,
    },
  }
})
