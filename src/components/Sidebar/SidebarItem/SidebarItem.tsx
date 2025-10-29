import type { FC, ReactElement } from 'react'

type SidebarItemProps = {
  text: string
  active: boolean
  link: string
  icon: ReactElement
}

const SidebarItem: FC<SidebarItemProps> = ({ text, active, link, icon }) => {
  return (
    <li
      className={`text-[14px] font-semibold  rounded-lg p-4 cursor-pointer ${active ? 'bg-main text-white' : 'text-black'}`}
    >
      <a href={link} className="flex items-center gap-2 decoration-none">
        {icon}
        {text}
      </a>
    </li>
  )
}

export default SidebarItem
