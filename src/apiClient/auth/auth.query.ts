import { useQuery } from '@tanstack/react-query'
import { apiClient } from '..'
import type { UserData } from './auth.type'

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<UserData> => {
      const { data } = await apiClient.get('/api/auth/me')

      return data
    },
  })
}
