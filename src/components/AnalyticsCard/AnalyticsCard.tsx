import type { FC, ReactElement } from 'react'

type AnalyticsCardProps = {
  icon: ReactElement
  title: string
  value: string
}

const AnalyticsCard: FC<AnalyticsCardProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center gap-2 p-4 border border-gray-200 rounded-md shadow w-full">
      {icon}
      <div>
        <p className="text-[18px] font-semibold">{title}</p>
        <p className="text-[24px] font-bold">{value}</p>
      </div>
    </div>
  )
}

export default AnalyticsCard
