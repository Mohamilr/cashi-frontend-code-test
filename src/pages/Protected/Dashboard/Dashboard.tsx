import DashboardData from './DashboardData/DashboardData'
import { useGetUser } from 'apiClient/auth/auth.query'

const Dashboard = ({}) => {
  const { data } = useGetUser()

  return (
    <section className="py-4 px-6">
      <h2 className="text-[40px] font-bold">Welcome, {data?.firstName}</h2>
      <DashboardData />
    </section>
  )
}

export default Dashboard
