# @spruce-hub/nuxt-route

> Secure and easy route ability integration with Nuxt.js

## Usage

```bash
npm install @spruce-hub/nuxt-route --save
# or
pnpm add @spruce-hub/nuxt-route -P
```

## Quick start

### Basic Configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    [
      '@spruce-hub/nuxt-route',
      {
        // 需要鉴权的路由地址
        // 如果使用 `/` 结束，则包括子路由地址也需要登录才能访问
        authPath: ['/order', '/personal/'],

        // 登录页的路由地址
        loginPath: '/login',

        // 根据所提供的 name，从 cookie 中获取 value
        // 如果 value 存在，则认为当前为登录状态
        cookieName: 'access_token',

        // 登录成功之后默认重定向到上一个页面
        // 如果上一个页面的路地址由包含在其中，则直接重定向到首页
        excludePath: ['/login', '/register'],
      },
    ],
  ],
})
```

### Helper

- `useToLogin(fullPath: string): void`

  - 记住路由地址并跳转到登录页
  - 登录成功后如果调用了 `useLoginSuccess` 将跳转到记住的地址

- `useLoginSuccess(token: string, options?: CookieOptions | string, to?: string): void`

  - `token` 将要写入 cookie 的值， name 为 `nuxtRoute.cookieName`
  - `options` 当为 `object` 类型时，作为 `useCookie` 的 `options`；当为 `string` 类型时，作为重定向路由地址
  - `to` 重定向到该路由地址。具有最高优先级，哪怕 `options` 为 `string` 类型
  - 当 `options` 不为 `string` 类型，且 `to` 不存在时，则判断是否存在被拦截的路由地址或被 `useToLogin` 记录的路由地址，存在则重定向到被拦截的路由地址，不存在则重定向到首页
  - cookie 中的 `${nuxtRoute.cookieName}_timestamp` 记录了登录时间

```ts
// 记住 `/about` 路由地址并跳转到登录页
useToLogin('/about')
```

```ts
const login = (token) => {
  // options 为 useCookie 的第二个参数，用于设置 cookie 的其他属性
  const options = {
    maxAge: 3600,
  }

  useLoginSuccess(token, options)
}
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Spruce FE
