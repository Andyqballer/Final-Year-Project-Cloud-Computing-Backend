// import the library
import { createToast } from 'mosha-vue-toastify'

export default {
  makeToast(type, message) {
    return createToast(message, {
      type: type,
      showIcon: 'true',
      swipeClose: 'true'
    })
  }
}
