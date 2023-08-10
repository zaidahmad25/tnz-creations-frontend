import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tnzcreationsinventory.up.railway.app/', // Your backend API URL
  withCredentials: true, // Include cookies in the request
})

export default api