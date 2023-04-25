import { defineEventHandler, parseCookies, proxyRequest } from 'h3'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import { useRuntimeConfig } from '#imports'

import type { H3Event } from 'h3'

const { nuxtFetch } = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event) => {
  /**
   * feat: Support retrieving API host from environment variables
   * -------------------------- */
  const apiHost =
    process.env[nuxtFetch.apiHostEnv] || nuxtFetch.apiHostUrl || event.node.req.headers.host

  if (event.node.req.url?.startsWith(nuxtFetch.baseApi)) {
    const url = `${apiHost}${event.node.req.url}`
    const headers = {}

    const cookies = parseCookies(event)

    /**
     * fix: resolve Internal Server Error (#3)
     * note: Authorization should always be of string type
     * -------------------------- */
    headers['Authorization'] = cookies[nuxtFetch.authorization || 'access_token'] || 'none'

    return proxyRequest(event, url, { headers })
  }
})
