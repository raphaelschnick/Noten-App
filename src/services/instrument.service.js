import httpClient from './httpClient'
import { app } from '@/main'

const END_POINT = '/instrument'

const instrumentService = {
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
      const RAW_DATA = await httpClient.get(`${END_POINT}` + '/' + id)
      return RAW_DATA.data
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

export default instrumentService
