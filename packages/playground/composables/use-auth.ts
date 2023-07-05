export const useAuth = () => {
  const { $loginSuccess } = useNuxtApp()
  const token = useState('token', () => useCookie('access_token').value || '')

  function login(t: string) {
    token.value = t
    $loginSuccess(t)
  }

  function logout() {
    useCookie('access_token').value = ''
    token.value = ''
  }

  return { token, login, logout }
}
