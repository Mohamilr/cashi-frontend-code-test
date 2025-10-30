import { useGetATransaction } from 'apiClient/transactions/transactions.query'
import { Navigate, useParams } from 'react-router'
import PageLoader from 'components/PageLoader/PageLoader'
import Error from 'components/Error/Error'
import dayjs from 'dayjs'
import { formatNumber } from 'utils'

const Transaction = () => {
  const params = useParams()

  if (!params.transactionId) {
    return <Navigate to="/transactions" />
  }

  const { data, isLoading, error, refetch } = useGetATransaction(
    params.transactionId
  )

  if (isLoading) return <PageLoader />
  if (error) return <Error message={error.message} onRetry={refetch} />

  return (
    <section className="flex flex-col py-4 px-6">
      <h2 className="text-[40px] font-bold">Transaction</h2>
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-[18px] font-bold">
          ID: <span className="text-[16px] font-normal">{data?.id}</span>
        </p>
        <p className="text-[18px] font-bold">
          Date:{' '}
          <span className="text-[16px] font-normal">
            {dayjs(data?.date).format('DD MMMM, YYYY')}
          </span>
        </p>
        <p className="text-[18px] font-bold">
          Merchant:{' '}
          <span className="text-[16px] font-normal">{data?.merchant}</span>
        </p>
        <p className="text-[18px] font-bold">
          Account:{' '}
          <span className="text-[16px] font-normal">{data?.account}</span>
        </p>
        <p className="text-[18px] font-bold">
          Amount:{' '}
          <span className="text-[16px] font-normal">{`$${formatNumber(data?.amount ?? 0)}`}</span>
        </p>
        <p className="text-[18px] font-bold">
          Payment Method:{' '}
          <span className="text-[16px] font-normal">{data?.paymentMethod}</span>
        </p>
        <p className="text-[18px] font-bold">
          Reference Number:{' '}
          <span className="text-[16px] font-normal">
            {data?.referenceNumber}
          </span>
        </p>
        <p className="text-[18px] font-bold">
          Description:{' '}
          <span className="text-[16px] font-normal">{data?.description}</span>
        </p>
        <p className="text-[18px] font-bold">
          Status:{' '}
          <span className="text-[16px] font-normal">{data?.status}</span>
        </p>
      </div>
    </section>
  )
}

export default Transaction
