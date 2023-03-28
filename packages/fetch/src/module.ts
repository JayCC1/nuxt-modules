import { defineNuxtModule, createResolver, addServerHandler } from '@nuxt/kit'

import { defaults } from './config'

import type { Options } from './types'

export default defineNuxtModule<Options>({
  meta: {
    name: '@spruce-hub/nuxt-fetch',
    configKey: 'nuxtFetch',
    compatibility: {
      nuxt: '^3.2.0',
    },
  },
  defaults,
  setup() {
    const resolver = createResolver(import.meta.url)

    /** add serverMiddleware
     * -------------------------- */
    addServerHandler({
      handler: resolver.resolve('./runtime/server-middleware'),
    })
  },
})
