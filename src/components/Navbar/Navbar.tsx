import type { FC } from "react"
import Avatar from "components/Avatar/Avatar"
import Button from "components/Button/Button"
import { Icon } from "@iconify-icon/react"

type NavbarProps = {
    name?: string
    toggleSidebar: () => void
}

const Navbar: FC<NavbarProps> = ({ name, toggleSidebar }) => {
    return (
        <nav className="flex items-center justify-between md:justify-end px-4 h-16 border-b border-gray-200">
            <Button text="" variant="text" className="w-fit! md:hidden hover:bg-main/15 py-2! px-2 rounded-full!" rightIcon={<Icon icon="icon-park:hamburger-button" className="cursor-pointer" width={20} height={20} />} onClick={toggleSidebar} />
            <Avatar letter={name?.[0] ?? "?"} />
        </nav>
    )
}

export default Navbar