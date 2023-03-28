import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/sprucehub/nuxt-modules/node_modules/.pnpm/nuxt@3.3.1_sass@1.60.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}