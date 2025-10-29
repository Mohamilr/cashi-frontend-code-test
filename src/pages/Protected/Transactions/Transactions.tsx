import { useGetTransactions } from "apiClient/transactions/transactions.query"
import Error from 'components/Error/Error'
import PageLoader from 'components/PageLoader/PageLoader'
import Table from 'components/Table/Table'
import dayjs from 'dayjs'
import TableRow from 'components/Table/TableRow'
import TableCell from 'components/Table/TableCell'


const Transactions = () => {
    const { data, isLoading, error, refetch, queryValues, setQueryValues } = useGetTransactions()

    if (isLoading) return <PageLoader />
    if (error) return <Error message={error.message} onRetry={refetch} />

    console.log({ data, queryValues, d: data?.pagination })

    const handlePageChange = (page: number) => {
        setQueryValues(prev => ({ ...prev, page }))
    }

    return (
        <section className="flex flex-col py-4 px-6">
            <h2 className="text-[40px] font-bold">Transactions</h2>

            <section className="mt-12  h-full overflow-y-auto">
                <Table tableHeader={['Date', 'Merchant', 'Account']}
                    containerClassName="h-[calc(_100vh-_240px)]"
                    isPaginated={true} currentPage={data?.pagination?.page}
                    pageSize={data?.pagination?.pageSize}
                    totalRecords={data?.pagination?.totalItems}
                    onPageChange={(page) => handlePageChange(page)} >
                    {data?.items?.map((transaction) => (
                        <TableRow key={transaction?.id}>
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

export default Transactions