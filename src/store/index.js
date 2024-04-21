import { createStore } from 'vuex'
import baseUrl from '../config/baseUrl'
import axios from 'axios'

const base_url = baseUrl();
const randString = 'eyjoicmVmcmVzaCIsImV4cCI6MTcwNjcwNjghekj@3k2lkjdfkalladfl@zNywiaWF0IjoxN';

function getToken(name) {
  return window.atob(localStorage.getItem(name)).replaceAll(randString, '')
}
function encodeToken(token) {
  return window.btoa(randString + token + randString)
}

export default createStore({
  modules: {
  },
  state: {
    // Utils
    base_url: base_url,
    randString: randString,
    getToken: getToken('aut'),
    // API Data
    userProfile: {}
  },
  mutations: {
    update_userProfile: (state, newData) => (state.userProfile = newData)
  },
  actions: {
    // Utility Methods
    async logout() {
      this.userProfile = {}
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('aut')
      localStorage.removeItem('rut')
      localStorage.removeItem('business_name')
      localStorage.removeItem('business_uuid')
      document.location.href = '/login'
    },
    // User Methods
    async getUserProfile({ commit, dispatch }) {
      axios
        .get(base_url + '/auth/user/', { headers: { Authorization: `Bearer ${getToken('aut')}` } })
        .then((response) => {
          commit('update_userProfile', response.data);
        })
        .catch(() => {
          // Check token expiration and use refresh
          axios
            .post(base_url + '/auth/token/refresh/', null, {
              headers: {
                'accept': 'application/json',
                'refresh': getToken('rut')
              }
            })
            .then((response) => {
              localStorage.setItem('aut', encodeToken(response.data.access_token))
              window.location.reload()
            }).catch((err) => {
              console.log(err.response.data);
              if (err.message === 'Network Error') {
                console.log('No internet')
              } else {
                dispatch('logout')
              }
            })
        })
    }
  },
  getters: {}
})
