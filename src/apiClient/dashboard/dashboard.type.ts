import type { Transaction } from 'apiClient/transactions/transactions.type'

export interface DashboardStats {
  income: {
    amount: number
    currency: 'USD'
  }
  expenses: {
    amount: number
    currency: 'USD'
  }
  mostRecentTransactions: Transaction[]
}
