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
        '/api': {
          pathRewrite: {
            '^/api': 'api',
          },
          apiHostEnv: 'API_HOST',
          apiHostUrl: 'http://api.com',
          cookieName: 'access_token',
        },
        '/api2': {
          pathRewrite: {
            '^/api2': '/api',
          },
          apiHostEnv: 'API_HOST',
          apiHostUrl: 'http://api2.com',
          cookieName: 'access_token',
        },
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
