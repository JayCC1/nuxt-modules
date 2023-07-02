import { defineNuxtModule, createResolver, addTemplate, addPlugin } from '@nuxt/kit'

import { defaults } from './config'

import type { Options } from './types'

export default defineNuxtModule<Options>({
  meta: {
    name: '@spruce-hub/nuxt-route',
    configKey: 'nuxtRoute',
    compatibility: {
      nuxt: '^3.2.0',
    },
  },
  defaults,
  setup(_options) {
    const { resolve } = createResolver(import.meta.url)

    /** add route options template
     * -------------------------- */
    addTemplate({
      filename: 'spruce-module-route.mjs',
      write: true,
      getContents: () => {
        return `export default ${JSON.stringify(_options, null, 2)}`
      },
    })

    /** add route middleware
     * -------------------------- */
    addPlugin(resolve('./runtime/plugins/authentication'))
  },
})
