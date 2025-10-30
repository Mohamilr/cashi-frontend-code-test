export interface TransactionsQueryValues {
  page: number
  merchant?: string
  date?: string
}

export interface Transaction {
  account: string
  amount: number
  date: string
  description: string
  id: string
  merchant: string
  paymentMethod: 'Debit Card' | 'Credit Card'
  referenceNumber: string
  status: 'completed'
}

export interface Transactions {
  items: Transaction[]
  pagination: {
    page: number
    pageSize: number
    totalItems: number
    totalRecords: number
  }
}
