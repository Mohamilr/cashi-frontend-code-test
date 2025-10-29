import type { FC } from 'react'
import { Icon } from '@iconify-icon/react'

type PageLoaderProps = {
  className?: string
  height?: number
}
const PageLoader: FC<PageLoaderProps> = ({ className, height = 50 }) => {
  return (
    <div
      className={`h-full w-full flex items-center justify-center ${className}`}
    >
      <Icon
        icon="svg-spinners:6-dots-scale"
        className="text-main"
        height={height}
      />
    </div>
  )
}

export default PageLoader
