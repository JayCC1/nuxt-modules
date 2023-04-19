export interface Options {
  /**
   * 使用 glob 模式匹配需要鉴权的路由
   * - Example: ['/presonal/*', '/order/**']
   */
  authPath: string[]

  /**
   * 登录页面路由
   * - Default: '/login'
   */
  loginPath?: string

  /**
   * Cookie 中 token 的名称
   * - Default: 'access_token'
   */
  tokenName?: string

  /**
   * 使用 glob 模式过滤重定向路由
   *
   * 登录成功之后默认重定向到上一级路由，但存在不合理的回跳情况
   *
   * 例如：当上一级页面是 “注册” 页面或首次访问的就是 “登录” 页面时，此时直接重定向到首页会更合适
   *
   * - Example: ['/login', '/register']
   * - Default: option.loginPath || '/login'
   */
  excludePath: string[]
}

export {}
