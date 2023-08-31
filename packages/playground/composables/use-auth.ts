export const useAuth = () => {
  const token = useState('token', () => useCookie('access_token').value || '')

  function login(t: string) {
    token.value = t
    useLoginSuccess(t, { maxAge: 3600 })
    const timestamp = useCookie<number>('access_token_timestamp')
    useSaveTokenTimestamp(timestamp.value)
  }

  function logout() {
    useCookie('access_token').value = ''
    token.value = ''
  }

  return { token, login, logout }
}
