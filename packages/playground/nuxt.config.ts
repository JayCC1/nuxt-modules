export default defineNuxtConfig({
  modules: ['@spruce-hub/nuxt-fetch', '@spruce-hub/nuxt-route'],
  nuxtRoute: {
    authPath: ['/order'],
    loginPath: '/login',
    tokenName: 'access_token',
    excludePath: ['/login', '/register'],
  },
  runtimeConfig: {
    nuxtFetch: {
      baseApi: '/api',
      serviceUrl: 'http://zfl.online.dev.fyunshan.com',
      authorization: 'access_token',
    },
  },
})
