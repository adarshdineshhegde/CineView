import { useNavigate } from 'react-router-dom'
import { useRootStore } from '@/data/providers'
import type { Credentials } from '../../core/types/Auth.types'

export const useAuthController = () => {
  const { sessionStore } = useRootStore()
  const navigate = useNavigate()

  const login = async (credentials: Credentials, redirectTo = '/') => {
    await sessionStore.login(credentials)
    if (sessionStore.loginStatus === 'success') {
      navigate(redirectTo)
    }
  }

  const logout = async () => {
    await sessionStore.logout()
    navigate('/login')
  }

  return {
    login,
    logout,
    loginStatus: sessionStore.loginStatus,
    errorMessage: sessionStore.errorMessage,
    isAuthenticated: sessionStore.isAuthenticated,
  }
}