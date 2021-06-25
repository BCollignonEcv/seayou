import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('vuejs_token')}`
    return config
  },
  error => Promise.reject(error)
)

export default instance
