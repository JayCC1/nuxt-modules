/**
 * @Describe 鉴权模块
 */
import { useState } from '#app'

export const useTokenTimestamp = () => useState<number | null>('tokenTimestamp', () => null)

/**
 * @Describe 保存时间戳
 */
export function useSaveTokenTimestamp(timestamp: number) {
  const tokenTimestamp = useTokenTimestamp()

  if (!tokenTimestamp.value) {
    tokenTimestamp.value = timestamp
  }
}

/**
 * @Describe 校验是否重新登录
 * @param { number } timestamp 要比较的时间戳
 * @return { boolean } `false` 校验失败，已被重新登录或第一次登录，考虑是否已变更用户
 * @return { boolean } `true` 校验通过，本次登录仍然有效
 */
export function useValidateToken(timestamp: number): boolean {
  const tokenTimestamp = useTokenTimestamp()

  if (!tokenTimestamp.value) {
    tokenTimestamp.value = timestamp
    return false
  } else if (tokenTimestamp.value === timestamp) {
    return true
  }
  tokenTimestamp.value = timestamp
  return false
}
