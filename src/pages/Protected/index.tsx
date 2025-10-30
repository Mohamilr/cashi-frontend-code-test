import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from 'components/Sidebar/Sidebar'
import Navbar from 'components/Navbar/Navbar'
import router from 'routes'
import { useGetUser } from 'apiClient/auth/auth.query'
import Cookies from 'js-cookie'

const index = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false)

  const { data } = useGetUser()

  const handleLogout = () => {
    router.navigate('/login')
    Cookies.remove('sessionId')
  }

  return (
    <main className="flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => toggleSidebar(false)}
        handleLogout={handleLogout}
      />
      <section className="flex flex-col flex-1">
        <Navbar
          name={data?.firstName}
          toggleSidebar={() => toggleSidebar(true)}
        />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default index
