export interface Options {
  /**
   * 需要鉴权的路由
   *
   * 如果使用 `/` 结束，则所有子路由也会被匹配，反之则只匹配自身
   */
  authPath: string[]

  /**
   * 登录页面路由
   * - Default: '/login'
   */
  loginPath?: string

  /**
   * 根据所提供的 name，从 cookie 中获取 value
   *
   * 如果 value 存在，则认为当前为登录状态
   * - Default: 'access_token'
   */
  cookieName?: string | undefined | null

  /**
   * 登录状态不允许访问的路由
   *
   * 例如：登录、注册页面，已登录状态访问这些页面将重定向到首页
   */
  excludePath: string[]
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    nuxtRoute?: Partial<Options>
  }
  interface NuxtOptions {
    nuxtRoute?: Partial<Options>
  }
}

export {}
