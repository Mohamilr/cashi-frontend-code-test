import { useMutation } from '@tanstack/react-query'
import { apiClient } from '..'
import type { LoginData } from './auth.type'

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body: LoginData) => {
      const { data } = await apiClient.post('/api/auth/login', body)

      return data
    },
  })
}
