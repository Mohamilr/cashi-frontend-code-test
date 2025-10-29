import axios, { AxiosError } from 'axios'
import type { AxiosResponse } from 'axios'
import { handleError } from 'utils'

export const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  async (response) => {
    return response
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse

    handleError(status, data.Message)

    return Promise.reject(error.response)
  }
)
