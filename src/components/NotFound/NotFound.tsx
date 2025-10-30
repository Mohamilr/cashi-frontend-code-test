import type { FC } from 'react'
import router from 'routes'
import Button from 'components/Button/Button'

type NotFoundProps = {
  title?: string
}

const NotFound: FC<NotFoundProps> = ({ title = 'Page not found' }) => {
  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <div>
        <h1 className="text-[40px] font-semibold mb-4">{title}</h1>
        <Button
          text="Go home"
          onClick={() => router.navigate('/', { replace: true })}
        />
      </div>
    </div>
  )
}

export default NotFound
