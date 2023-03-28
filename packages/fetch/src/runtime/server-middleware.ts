import {
  defineEventHandler,
  getRequestHeaders,
  readBody,
  parseCookies,
  getMethod,
  getQuery,
} from 'h3'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import { useRuntimeConfig } from '#imports'

import type { H3Event } from 'h3'

const { nuxtFetch } = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event) => {
  if (event.node.req.url?.startsWith(nuxtFetch.baseApi)) {
    const url = `${nuxtFetch.serviceUrl}${event.node.req.url}`
    const method = getMethod(event)
    const query = getQuery(event)
    const headers = getRequestHeaders(event)
    const cookies = parseCookies(event)
    let body = null
    headers['Authorization'] = nuxtFetch.authorization || cookies['access_token']
    delete headers['host']
    if ('GET' !== method.toUpperCase()) {
      body = await readBody(event)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: resolved with Nuxt
    return $fetch(url, {
      method,
      params: query,
      headers,
      body,
    })
  }
})
