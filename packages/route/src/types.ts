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
  cookieName?: string

  /**
   * 登录成功之后默认重定向到上一级路由，但存在不合理的回跳情况
   *
   * 例如：当上一级页面是 “注册” 页面或首次访问的就是 “登录” 页面时，此时直接重定向到首页会更合适
   */
  excludePath: string[]
}

export {}
