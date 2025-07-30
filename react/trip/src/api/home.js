import axios from './config.js'

export const getImages = (page) => {
  return axios.get('/images', { params: { page } })
}