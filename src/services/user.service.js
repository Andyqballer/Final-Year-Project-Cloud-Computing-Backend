import api from './api.service'

class UserService {
  getPublicContent() {
    return api.get('/users/general/awards/')
  }
  getAuthorBoard() {
    return api.get('/auth/user/')
  }
  getAdminBoard() {
    return api.get('/auth/user/')
  }
  getDashboard() {
    return api.get('/auth/user/')
  }
}
export default new UserService()
