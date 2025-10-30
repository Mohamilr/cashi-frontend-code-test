import { Navigate, Outlet, useLocation } from 'react-router'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const location = useLocation()
  const sessionId = Cookies.get('sessionId')

  if (!sessionId) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
