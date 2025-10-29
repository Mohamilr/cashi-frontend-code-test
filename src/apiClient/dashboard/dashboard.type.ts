export interface Transaction {
  account: string
  amount: number
  date: string
  description: string
  id: string
  merchant: string
  paymentMethod: 'Debit Card' | 'Credit Card'
  referenceNumber: string
  status: 'completed' | ''
}

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
