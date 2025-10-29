import type { FC } from "react"

type AvatarProps = {
    letter: string
}

const Avatar: FC<AvatarProps> = ({ letter }) => {
    return (
        <div className="relative size-12 rounded-full bg-main flex">
            <p className="text-white font-bold text-[20px] m-auto">
                {letter}
            </p>
        </div>
    )
}

export default Avatar