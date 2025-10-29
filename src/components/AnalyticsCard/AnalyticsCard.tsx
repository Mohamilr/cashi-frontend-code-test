import type { FC, ReactElement } from 'react'

type AnalyticsCardProps = {
    icon: ReactElement, title: string, value: string
}

const AnalyticsCard: FC<AnalyticsCardProps> = ({ icon, title, value }) => {
    return (
        <div className='flex flex-col items-start gap-2 p-4 border border-gray-200 rounded-md shadow w-full'>
            {icon}
            <p className='text-[18px] font-semibold'>{title}</p>
            <p className='text-[24px] font-bold'>{value}</p>
        </div>
    )
}

export default AnalyticsCard