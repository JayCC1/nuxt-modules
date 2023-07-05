export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Modules',
    },
  },
  modules: [
    [
      '@spruce-hub/nuxt-fetch',
      {
        apiBase: '/api',
        apiHostEnv: 'API_HOST',
        apiHostUrl: 'http://zflcnapi.online.dev.fyunshan.com',
        cookieName: 'access_token',
      },
    ],
    [
      '@spruce-hub/nuxt-route',
      {
        authPath: ['/order/'],
        loginPath: '/login',
        cookieName: 'access_token',
        excludePath: ['/login', '/register'],
      },
    ],
  ],
  devServer: {
    port: 3001,
  },
})
