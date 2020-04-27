import axios from './instance'

export default function ajax(url, data, type = 'GET') {
  let response
  if (type === 'GET') {
    response = axios.get(url, {
      params: data
    })
  } else if (type === 'POST') {
    response = axios.post(url, data)
  } else if (type === 'PUT') {
    response = axios.put(url, data)
  } else if (type === 'DELETE') {
    response = axios.delete(url, {
      params: data
    })
  }
  return response
}
