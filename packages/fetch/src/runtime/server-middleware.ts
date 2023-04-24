import { defineEventHandler, getProxyRequestHeaders, parseCookies, proxyRequest } from 'h3'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: resolved with Nuxt
import { useRuntimeConfig } from '#imports'

import type { H3Event } from 'h3'

const { nuxtFetch } = useRuntimeConfig()

export default defineEventHandler(async (event: H3Event) => {
  if (event.node.req.url?.startsWith(nuxtFetch.baseApi)) {
    const url = `${nuxtFetch.serviceUrl}${event.node.req.url}`
    const headers = getProxyRequestHeaders(event)
    const cookies = parseCookies(event)
    headers['Authorization'] = cookies[nuxtFetch.authorization || 'access_token']

    /**
     * fix: Use proxyRequest instead of $fetch to resolve Internal Server Error (#3)
     *
     * note:
     * 当删除 headers 中的 connection 字段之后错误不再出现
     * 也许是 h3 的设定或 bug
     * 在 https://github.com/unjs/h3/issues/375 中有提到相关的错误
     *
     * TODO: 目前问题如何出现的尚未明确，仍需注意此处会发生未知的错误。
     * -------------------------- */
    return proxyRequest(event, url, {
      headers,
    })
  }
})
