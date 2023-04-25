export interface Options {
  /**
   * 路由前缀
   * - Example: '/api'
   */
  baseApi: string

  /**
   * 授权码
   * - headers['Authorization']
   * - Default: Cookies['access_token']
   */
  authorization?: string

  /**
   * 可选，最高优先级，从环境变量中获取目标服务地址
   * @example { apiHostEnv: 'API_HOST' } // process.env.API_HOST
   */
  apiHostEnv?: string

  /**
   * 可选，当 process.env[apiHostEnv] 为 false，从 apiHostUrl 获取目标服务地址
   * @example { apiHostUrl: 'http://myapi.com/' } // http://myapi.com/
   */
  apiHostUrl?: string
}

export {}
