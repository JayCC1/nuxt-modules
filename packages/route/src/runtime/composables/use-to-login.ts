import { navigateTo, useCookie } from '#app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nuxtRoute from '#nuxtRoute'

/**
 * @Describe 记住路由并跳转到登录页面,同时清除 cookie 中的 token,登录成功后如果调用了 `useLoginSuccess` 将跳转到记住的地址
 * @param {string} fullPath 记录的路由地址
 * @param {string} open 登录页的打开方式，如果为 `_blank`，表示从新标签页打开
 */
export function useToLogin(fullPath: string, open?: '_blank') {
  const nextPath = useCookie<string>('next_path')
  nextPath.value = fullPath

  useCookie<string>(`${nuxtRoute.cookieName}`).value = ''

  if (open) {
    const protocol = window.location.protocol
    const host = window.location.host
    window.open(`${protocol}//${host}${nuxtRoute.loginPath}`, open)
  } else {
    return navigateTo(nuxtRoute.loginPath)
  }
}
