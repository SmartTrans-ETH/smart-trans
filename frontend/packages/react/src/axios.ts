import axios, { AxiosInstance } from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3001"
})

instance.defaults.headers.common.Accept = 'application/json'
instance.defaults.headers.Authorization = `Bearer ${localStorage.getItem("token")}`

export default instance
