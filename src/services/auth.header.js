export default function authHeader() {
  const randString = 'eyjoicmVmcmVzaCIsImV4cCI6MTcwNjcwNjghekj@3k2lkjdfkalladfl@zNywiaWF0IjoxN'
  let user = window.atob(localStorage.getItem('isLoggedIn'))
  let token = window.atob(localStorage.getItem('aut')).replaceAll(randString, '')

  if (user && token) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}
