import { HANDLE_LOGIN, HANDLE_LOGOUT } from './action-types'
import Cookies from 'js-cookie'

const handleLogin = value => ({
  type: HANDLE_LOGIN,
  value,
})

const handleLogout = () => ({
  type: HANDLE_LOGOUT,
})

export const login = username => {
  return async dispatch => {
    Cookies.set('user', { username, logined: true }, { expires: 30 })
    dispatch(handleLogin({ username, logined: true }))
  }
}

export const logout = () => {
  return async dispatch => {
    Cookies.remove('user')
    dispatch(handleLogout())
  }
}
