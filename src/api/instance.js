import axios from 'axios'
import { BASE_URL } from '../constants'
import Cookies from 'js-cookie'

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use(
  (request) => {
    const token = Cookies.get('token')
    if (token) {
      // 设置统一的请求头
      request.headers.Authorization = token
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    }
  },
  (error) => {
    console.log(error)
    return Promise.resolve(error)
  }
)

export default axios
