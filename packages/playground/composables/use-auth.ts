import Cookie from 'js-cookie'

export const useAuth = () => {
  const { $loginSuccess } = useNuxtApp()
  const token = useState('token', () => useCookie('access_token').value || '')

  function login(t: string) {
    token.value = t
    $loginSuccess(t)
  }

  function logout() {
    Cookie.remove('access_token')
    token.value = ''
  }

  return { token, login, logout }
}
