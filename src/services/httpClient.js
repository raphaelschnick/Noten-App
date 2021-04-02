import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000, // indicates, 10000ms ie. 10 second
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient