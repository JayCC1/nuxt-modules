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
    authPath: ['/presonal/*', '/product/**'],
    // 登录页面的路由
    loginPath: '/login',
    // 记录 token 的 cookie name
    tokenName: 'access_token',
    // 登录成功之后不可重定向至以下路由，
    excludePath: ['/login', '/register'],
  },
})
```

```vue
<script setup lang="ts">
const { $loginSuccess } = useNuxtApp()
const login = () => {
  let token = ''

  // ···

  $loginSuccess(token)
}
</script>

<template>
  <!-- ··· -->
  <div @click="login()">Login</div>
</template>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Spruce FE
