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
  modules: ['@spruce-hub/nuxt-route'],
  nuxtRoute: {
    // 需要鉴权的路由
    authPath: ['/presonal', '/product/'],
    // 登录页面的路由
    loginPath: '/login',
    // 记录 token 的 cookie name
    tokenName: 'access_token',
    // 登录成功之后不可重定向至以下路由，
    excludePath: ['/login', '/register'],
  },
})
```

- `nuxtRoute.authPath`
  - 如果路由没有使用 `/` 结尾，则只匹配当前路由
    - 如：`['/presonal']` 会匹配 `https://spruce.com/prisonal`，但不会匹配 `https://spruce.com/prisonal/123`

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

### 注意

`nuxtRoute.authPath` 如果路由没有使用 `/` 结尾，则只匹配当前路由

- 例：`['/presonal']`
  - 匹配 `https://spruce.com/prisonal`
  - 不匹配 `https://spruce.com/prisonal/123`

如果使用 `/` 结尾，则会匹配自身以及所有子路由

- 例：`['/product/']`
  - 匹配 `https://spruce.com/product`
  - 匹配 `https://spruce.com/product/123`
  - 匹配 `https://spruce.com/product/123/456`

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Spruce FE
