export interface Options {
  /**
   * 路由前缀
   * - Example: '/api'
   */
  baseApi: string

  /**
   * 服务地址
   * - Example: 'http://api.com'
   */
  serviceUrl: string

  /**
   * 授权码
   * - headers['Authorization']
   * - Default: Cookies['access_token']
   */
  authorization?: string
}

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    nuxtFetch?: Options
  }
}

export {}
