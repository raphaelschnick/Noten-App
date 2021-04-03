import httpClient from './httpClient'
import { app } from '@/main'

const END_POINT = '/piece'

const pieceService = {
  async getList () {
    try {
      const RAW_DATA = await httpClient.get(`${END_POINT}`)
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return []
    }
  },
  async get (id) {
    try {
      const RAW_DATA = await httpClient.get(`${END_POINT}/${id}`)
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  async add (piece) {
    try {
      const RAW_DATA = await httpClient.post(`${END_POINT}`, piece)
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  async update (piece, id) {
    try {
      const RAW_DATA = await httpClient.put(`${END_POINT}/${id}`, piece)
      return RAW_DATA.data
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  async delete (id) {
    try {
      await httpClient.delete(`${END_POINT}/${id}`)
    } catch (e) {
      this.errorHandling(e)
      return null
    }
  },
  errorHandling (e) {
    app.$bvToast.toast(e.message, {
      title: 'Error',
      variant: 'danger',
      noAutoHide: true
    })
    console.error(e)
  }
}

export default pieceService
