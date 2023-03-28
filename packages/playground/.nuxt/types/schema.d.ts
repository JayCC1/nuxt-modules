import { NuxtModule } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["nuxtFetch"]?: typeof import("@spruce-hub/nuxt-fetch").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxtRoute"]?: typeof import("@spruce-hub/nuxt-route").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@spruce-hub/nuxt-fetch", Exclude<NuxtConfig["nuxtFetch"], boolean>] | ["@spruce-hub/nuxt-route", Exclude<NuxtConfig["nuxtRoute"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nuxtFetch: {
      baseApi: string,

      serviceUrl: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}