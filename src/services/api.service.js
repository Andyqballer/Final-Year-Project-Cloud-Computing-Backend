import api from './api'

class ApiService {
  post(path, data) {
    return api.post(`${path}`, data)
  }
  update(path, data) {
    return api.put(`${path}`, data)
  }
  delete(path) {
    return api.delete(`${path}`)
  }
  get(path) {
    return api.get(`${path}`)
  }
}

export default new ApiService()
