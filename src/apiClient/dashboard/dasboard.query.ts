import { useQuery } from '@tanstack/react-query'
import { apiClient } from '..'
import type { DashboardStats } from './dashboard.type'

export const useGetStats = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: async (): Promise<DashboardStats> => {
      const { data } = await apiClient.get('/api/dashboard/stats')

      return data
    },
  })
}
