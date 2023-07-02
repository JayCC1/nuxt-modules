# @spruce-hub/nuxt-fetch

## Usage

```bash
npm install @spruce-hub/nuxt-fetch --save
# or
pnpm add @spruce-hub/nuxt-fetch -P
```

## Quick start

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    [
      '@spruce-hub/nuxt-fetch',
      {
        // 走代理路线的路由前缀
        apiBase: '/api',

        // 从环境变量获取目标服务器地址
        apiHostEnv: 'API_HOST', // process.env.API_HOST

        // 目标服务器地址，若 `apiHostEnv` 存在则被忽略
        apiHostUrl: 'http://zflcnapi.online.dev.fyunshan.com/',

        // 根据所提供的 name，从 cookie 中获取 value 并写入到 headers['Authorization']
        cookieName: 'access_token',
      },
    ],
  ],
})
```

```ts
const { data, pending, error, refresh } = await useFetch('/api/example')

// http://localhost/api/example => http://myapi.com/api/example
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Spruce FE
