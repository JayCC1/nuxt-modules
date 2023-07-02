import { defineEventHandler, parseCookies, proxyRequest } from 'h3'

import nuxtFetch from '#nuxtFetch'

import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  /**
   * feat: Support retrieving API host from environment variables
   * -------------------------- */
  let apiHost =
    process.env[nuxtFetch.apiHostEnv] || nuxtFetch.apiHostUrl || event.node.req.headers.host || ''

  apiHost = apiHost.endsWith('/') ? apiHost.slice(0, -1) : apiHost

  if (event.node.req.url?.startsWith(nuxtFetch.apiBase)) {
    const url = `${apiHost}${event.node.req.url}`
    const headers: Record<string, string> = {}

    const cookies = parseCookies(event)

    /**
     * fix: resolve Internal Server Error (#3)
     * note: Authorization should always be of string type
     * -------------------------- */
    headers['Authorization'] = cookies[nuxtFetch.cookieName || 'access_token'] || 'none'

    return proxyRequest(event, url, { headers })
  }
})
