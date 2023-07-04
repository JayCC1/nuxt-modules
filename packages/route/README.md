# @spruce-hub/nuxt-route

## Usage

```bash
npm install @spruce-hub/nuxt-route --save
# or
pnpm add @spruce-hub/nuxt-route -P
```

## Quick start

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    [
      '@spruce-hub/nuxt-route',
      {
        // 需要鉴权的路由
        // 如果使用 `/` 结束，则包括子路由也需要登录才能访问
        authPath: ['/order', '/personal/'],

        // 登录页面路由
        loginPath: '/login',

        // 根据所提供的 name，从 cookie 中获取 value
        // 如果 value 存在，则认为当前为登录状态
        cookieName: 'access_token',

        // 登录成功之后默认重定向到上一级路由
        // 如果上一级路由包含在其中，则直接重定向到首页
        excludePath: ['/login', '/register'],
      },
    ],
  ],
})
```

登录成功后通过 `$loginSuccess` 告诉 nuxt-route

此时会把 token 写入 cookie 并重定向回上一页

```ts
const { $loginSuccess } = useNuxtApp()
const login = () => {
  let token = ''

  // ···

  $loginSuccess(token)
}
```

```html
<template>
  <!-- ··· -->
  <div @click="login()">Login</div>
</template>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Spruce FE
