import axios, { AxiosError }  from "axios"
import type { AxiosResponse } from "axios";
import { handleError } from "utils"

export const apiClient = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
      },
})

apiClient.interceptors.response.use(
    async (response) => {
      return response
    },
    (error: AxiosError) => {
      console.log({error})
      const { data, status } = error.response as AxiosResponse
  console.log({status, data})
      handleError(status, data.Message)
  
      return Promise.reject(error.response)
    },
  )
  