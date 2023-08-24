import { navigateTo, useCookie } from '#app'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nuxtRoute from '#nuxtRoute'

/**
 * @Describe 记住路由并跳转到登录页面,同时清除 cookie 中的 token,登录成功后如果调用了 `useLoginSuccess` 将跳转到记住的地址
 * @param {string} fullPath 记录的路由地址
 */
export function useToLogin(fullPath: string) {
  const nextPath = useCookie<string>('next_path')
  nextPath.value = fullPath

  useCookie<string>(`${nuxtRoute.cookieName}`).value = ''

  navigateTo(nuxtRoute.loginPath)
}
