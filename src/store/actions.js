import { HANDLE_LOGIN, HANDLE_LOGOUT } from './action-types'
import Cookies from 'js-cookie'

const handleLogin = value => ({
  type: HANDLE_LOGIN,
  value
})

const handleLogout = () => ({
  type: HANDLE_LOGOUT
})

export const login = ({username,role,seller_type}) => {
  return async dispatch => {
    dispatch(handleLogin({ username, role, seller_type, logined: true }))
  }
}

export const logout = () => {
  return async dispatch => {
    Cookies.remove('user')
    dispatch(handleLogout())
  }
}
