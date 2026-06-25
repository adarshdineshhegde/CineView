import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useRootStore } from '@/data/providers'

export const ProtectedRoute = observer(() => {
  const { sessionStore } = useRootStore()
  const location = useLocation()

  if (!sessionStore.isAuthenticated) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    )
  }

  return <Outlet />
})