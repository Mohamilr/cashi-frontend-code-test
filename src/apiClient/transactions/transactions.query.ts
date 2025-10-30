import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '..'
import type {
  Transaction,
  Transactions,
  TransactionsQueryValues,
} from './transactions.type'

const getTransactions = async ({
  page,
  merchant,
  date,
}: TransactionsQueryValues): Promise<Transactions> => {
  const { data } = await apiClient.get(
    `/api/transactions?page=${page}&merchant=${merchant}&date=${date}`
  )

  return data
}

export const useGetTransactions = () => {
  const [queryValues, setQueryValues] = useState({
    page: 1,
    merchant: '',
    date: '',
  })

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [
      'transactions',
      queryValues.page,
      queryValues.merchant,
      queryValues.date,
    ],
    queryFn: () =>
      getTransactions({
        page: queryValues.page,
        merchant: queryValues.merchant,
        date: queryValues.date,
      }),
  })

  return {
    data,
    isLoading,
    error,
    refetch,
    queryValues,
    setQueryValues,
  }
}

export const useGetATransaction = (transactionId: string) => {
  return useQuery({
    queryKey: ['transaction', transactionId],
    queryFn: async (): Promise<Transaction> => {
      const { data } = await apiClient.get(`/api/transactions/${transactionId}`)

      return data
    },
    enabled: !!transactionId,
  })
}
