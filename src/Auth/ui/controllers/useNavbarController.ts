import { useNavigate } from 'react-router-dom'
import { useRootStore } from '@/data/providers'

export const useNavbarController = () => {
  const { sessionStore , watchlistStore } = useRootStore()
  const navigate = useNavigate()

  const logout = async () => {
    await sessionStore.logout()
    navigate('/login')
  }

  return {
    username: sessionStore.session?.username ?? '',
    watchlistCount: watchlistStore.count,
    logout,
  }
}