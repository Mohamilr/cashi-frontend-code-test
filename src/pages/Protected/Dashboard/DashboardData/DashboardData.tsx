import AnalyticsCard from "components/AnalyticsCard/AnalyticsCard"
import PageLoader from "components/PageLoader/PageLoader"
import { formatNumber } from "utils"
import { Icon } from "@iconify-icon/react"
import { useGetStats } from "apiClient/dashboard/dasboard.query"
import Error from "components/Error/Error"

const DashboardData = () => {
    const { data, isLoading, error, refetch } = useGetStats()

    console.log({ data, isLoading, error, })
    if (isLoading) return <PageLoader />
    if (error) return <Error message={error.message} onRetry={refetch} />


    return (
        <section>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <AnalyticsCard icon={<Icon icon="solar:money-bag-outline" width={50} height={50} className="text-green-500" />} title="Income" value={`${formatNumber(data?.income?.amount as number)}`} />
                <AnalyticsCard icon={<Icon icon="hugeicons:money-send-square" width={50} height={50} className="text-secondary" />} title="Expenses" value={`${formatNumber(data?.expenses?.amount as number)}`} />
            </div>
        </section>
    )
}

export default DashboardData