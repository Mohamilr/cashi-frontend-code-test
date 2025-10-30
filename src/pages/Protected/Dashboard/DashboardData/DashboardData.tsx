import AnalyticsCard from 'components/AnalyticsCard/AnalyticsCard'
import PageLoader from 'components/PageLoader/PageLoader'
import { formatNumber, showCurrency } from 'utils'
import { Icon } from '@iconify-icon/react'
import { useGetStats } from 'apiClient/dashboard/dasboard.query'
import Error from 'components/Error/Error'
import Table from 'components/Table/Table'
import dayjs from 'dayjs'
import TableRow from 'components/Table/TableRow'
import TableCell from 'components/Table/TableCell'
import router from 'routes'

const DashboardData = () => {
    const { data, isLoading, error, refetch } = useGetStats()

    if (isLoading) return <PageLoader />
    if (error) return <Error message={error.message} onRetry={refetch} />

    const handleViewTransaction = (transactionId: string) => {
        router.navigate(`/transactions/${transactionId}`)
    }

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <AnalyticsCard
                    icon={
                        <Icon
                            icon="solar:money-bag-outline"
                            width={80}
                            className="text-green-500"
                        />
                    }
                    title="Income"
                    value={`${showCurrency(data?.income?.currency ?? '')}${formatNumber(data?.income?.amount ?? 0)}`}
                />
                <AnalyticsCard
                    icon={
                        <Icon
                            icon="hugeicons:money-send-square"
                            width={80}
                            className="text-secondary"
                        />
                    }
                    title="Expenses"
                    value={`${showCurrency(data?.expenses?.currency ?? '')}${formatNumber(data?.expenses?.amount ?? 0)}`}
                />
            </div>
            <section className="mt-20">
                <Table tableHeader={['Date', 'Merchant', 'Account']}>
                    {data?.mostRecentTransactions?.map((transaction) => (
                        <TableRow
                            key={transaction?.id}
                            className="cursor-pointer hover:bg-gray-200/20"
                            onClick={() => handleViewTransaction(transaction?.id)}
                        >
                            <TableCell>
                                {dayjs(transaction?.date).format('DD MMM, YYYY')}
                            </TableCell>
                            <TableCell>{transaction?.merchant}</TableCell>
                            <TableCell>{transaction.account}</TableCell>
                        </TableRow>
                    ))}
                </Table>
            </section>
        </section>
    )
}

export default DashboardData
