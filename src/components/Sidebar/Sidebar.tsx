import { useEffect, useRef } from 'react'
import type { FC } from 'react'
import Button from 'components/Button/Button'
import SidebarItem from './SidebarItem/SidebarItem'
import { Icon } from '@iconify-icon/react'
import { useLocation } from 'react-router'
import { useWindowSize } from 'hooks/useWindowSize'
import useOutsideClick from 'hooks/useOutsideClick'

type SidebarProps = {
  handleLogout: () => void
  isOpen: boolean
  onClose: () => void
}

const sideBarItems = [
  { text: 'Dashboard', icon: 'material-symbols:dashboard-rounded', link: '/' },
  {
    text: 'Transactions',
    icon: 'hugeicons:transaction-history',
    link: '/transactions',
  },
]

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, handleLogout }) => {
  const location = useLocation()

  const { isMobile } = useWindowSize()

  useEffect(() => {
    onClose()
  }, [isMobile])

  const sidebarRef = useRef<HTMLElement>(null)

  useOutsideClick({
    ref: sidebarRef,
    handler: () => onClose(),
  })

  return (
    <>
      {(!isMobile || isOpen) && (
        <aside
          ref={sidebarRef}
          className="flex flex-col w-[300px] fixed md:relative border-r border-gray-200 p-4 h-dvh bg-white z-50 "
        >
          <div className="flex items-center justify-between md:justify-center">
            <img
              src="/applogo.png"
              alt="logo"
              className="h-12 w-12 rounded-sm"
            />
            <Button
              text=""
              variant="text"
              className="w-fit! md:hidden hover:bg-main/15 py-2! px-2 rounded-full!"
              rightIcon={
                <Icon
                  icon="proicons:cancel"
                  className="cursor-pointer"
                  width={20}
                  height={20}
                />
              }
              onClick={onClose}
            />
          </div>
          <div className="flex flex-col flex-1 mt-12">
            <ul className="flex flex-col gap-2 list-none">
              {sideBarItems.map((item, i) => (
                <SidebarItem
                  key={i}
                  text={item.text}
                  active={
                    location.pathname.split('/')?.[1] ===
                    item.link.split('/')?.[1]
                  }
                  icon={<Icon icon={item.icon} width={25} height={25} />}
                  link={item.link}
                />
              ))}
            </ul>
            <div className="flex flex-col flex-1 justify-end">
              <Button
                text="Logout"
                type="button"
                className="gap-4 text-red-500!"
                variant="text"
                rightIcon={
                  <Icon icon="famicons:exit-outline" width={25} height={25} />
                }
                onClick={handleLogout}
              />
            </div>
          </div>
        </aside>
      )}
    </>
  )
}

export default Sidebar
