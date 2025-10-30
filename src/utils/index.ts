import { toast } from 'react-hot-toast'
import router from 'routes'

export const handleError = (statusCode: number, message: string) => {
  switch (statusCode) {
    case 400:
      toast.error(message || 'Invalid request')
      break
    case 401:
      toast.error(message || 'Unauthorized')
      router.navigate('/login')
      break
    case 403:
      toast.error(message || 'Forbidden')
      router.navigate('/login')
      break
    case 404:
      toast.error(message || 'Data not found')
      break
    case 500:
      toast.error('Something went wrong, kindly try again.')
      break
    default:
      break
  }
}

export const formatNumber = (amount: number) => {
  return new Intl.NumberFormat().format(amount)
}

const currencies: Record<string, string> = {
  USD: '$',
}

export const showCurrency = (currency: string) => {
  return currencies[currency]
}
