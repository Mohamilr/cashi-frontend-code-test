import PageLoader from 'components/PageLoader/PageLoader'
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
const Login = lazy(() => import('pages/Auth/Login/Login'))
const ProtectedPagesLayout = lazy(() => import('pages/Protected'))
const Dashboard = lazy(() => import('pages/Protected/Dashboard/Dashboard'))
const Transactions = lazy(
  () => import('pages/Protected/Transactions/Transactions')
)
const Transaction = lazy(
  () => import('pages/Protected/Transactions/Transaction/Transaction')
)
const ProtectedRoute = lazy(() => import('./ProtectedRoute'))

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader className="h-dvh!" height={100} />}>
        <ProtectedPagesLayout />
      </Suspense>
    ),
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          { index: true, Component: Dashboard },
          { path: '/transactions', Component: Transactions },
          { path: '/transactions/:transactionId', Component: Transaction },
        ],
      },
    ],
  },
])

export default router
