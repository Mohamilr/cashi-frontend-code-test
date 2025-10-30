import { useGetTransactions } from 'apiClient/transactions/transactions.query'
import Error from 'components/Error/Error'
import PageLoader from 'components/PageLoader/PageLoader'
import Table from 'components/Table/Table'
import dayjs from 'dayjs'
import TableRow from 'components/Table/TableRow'
import TableCell from 'components/Table/TableCell'
import Input from 'components/Input/Input'
import SearchInput from 'components/Input/SearchInput/SearchInput'
import router from 'routes'
import { formatNumber } from 'utils'

const Transactions = () => {
  const { data, isLoading, error, refetch, queryValues, setQueryValues } =
    useGetTransactions()

  if (isLoading) return <PageLoader />
  if (error) return <Error message={error.message} onRetry={refetch} />

  const handlePageChange = (page: number) => {
    setQueryValues((prev) => ({ ...prev, page }))
  }

  const handleDateQuery = (date: string) => {
    setQueryValues((prev) => ({ ...prev, date }))
  }

  const handleSearch = (searchValue: string) => {
    setQueryValues((prev) => ({ ...prev, merchant: searchValue }))
  }

  const handleViewTransaction = (transactionId: string) => {
    router.navigate(`/transactions/${transactionId}`)
  }

  return (
    <section className="flex flex-col py-4 px-6">
      <h2 className="text-[40px] font-bold">Transactions</h2>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between mt-6">
        <SearchInput
          placeholder="Search by merchant"
          value={queryValues.merchant}
          handleSearch={handleSearch}
        />
        <Input
          name="date"
          type="date"
          defaultValue={queryValues.date}
          onChange={(e) => handleDateQuery(e.target.value)}
        />
      </div>

      <section className="mt-6  h-full overflow-y-auto">
        <Table
          tableHeader={['Date', 'Merchant', 'Amount']}
          containerClassName="h-[calc(_100vh-_340px)] md:h-[calc(_100vh-_270px)]"
          isPaginated={true}
          currentPage={data?.pagination?.page}
          pageSize={data?.pagination?.pageSize}
          totalRecords={data?.pagination?.totalItems}
          onPageChange={(page) => handlePageChange(page)}
        >
          {data?.items?.map((transaction) => (
            <TableRow
              className="cursor-pointer hover:bg-gray-200/20"
              key={transaction?.id}
              onClick={() => handleViewTransaction(transaction?.id)}
            >
              <TableCell>
                {dayjs(transaction?.date).format('DD MMM, YYYY')}
              </TableCell>
              <TableCell>{transaction?.merchant}</TableCell>
              <TableCell
                className={`${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}
              >{`$${formatNumber(transaction.amount)}`}</TableCell>
            </TableRow>
          ))}
        </Table>
      </section>
    </section>
  )
}

export default Transactions
