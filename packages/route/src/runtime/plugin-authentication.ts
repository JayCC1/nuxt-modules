import { defineNuxtPlugin, addRouteMiddleware, navigateTo } from '#app'
import options from '#build/spruce.module.route.options.mjs'

import Cookie from 'js-cookie'
import anymatch from 'anymatch'

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
 * @param {string} path 待验证路由
 * @param {string} pathGlob glob 匹配规则
 * @returns {string[]} 匹配成功时返回匹配的路由，否则返回空
 */
const verifyPath = (path: string, pathGlob: string[]): string[] =>
  pathGlob.filter((item) => (anymatch(path, item) ? path : ''))

export default defineNuxtPlugin(() => {
  /**
   * 定义全局路由中间件
   * -------------------------- */
  addRouteMiddleware(
    'authentication-middleware-global',
    (to, from) => {
      historyFullPath = from.path

      // 重定向到登录页时，仍保留拦截的路由
      if (!(to.path === options.loginPath)) {
        interceptFullPath = ''
      }

      /**
       * 拦截条件
       * - cookie 中不存在 token
       * - 待进入的路由需要鉴权
       *
       * 满足以上条件则跳转到登录页面
       * -------------------------- */
      if (!Cookie.get(options.tokenName) && verifyPath(to.path, options.authPath).length > 0) {
        interceptFullPath = to.fullPath
        return navigateTo(options.loginPath)
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

    toFullPath = verifyPath(toFullPath, options.excludePath).length > 0 ? '/' : toFullPath

    Cookie.set(options.tokenName, token)

    return navigateTo(toFullPath)
  }

  return {
    provide: {
      loginSuccess,
    },
  }
})
