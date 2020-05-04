import { HANDLE_LOGIN, HANDLE_LOGOUT } from './action-types'
import { message } from 'antd'
// import request from '../api/request'
import Cookies from 'js-cookie'

const handleLogin = value => {
  return {
    type: HANDLE_LOGIN,
    value
  }
}

const handleLogout = () => ({
  type: HANDLE_LOGOUT
})

export const login = (username, password) => {
  return async dispatch => {
    try {
      Cookies.set('user', { username, logined: true }, { expires: 30 })
      dispatch(handleLogin({ username, logined: true }))
      // todo
      // const result = await request('xxx')
      // const { success } = result
      // console.log(result)
      // if (success) {
      //   message.success('登录成功')
      //   Cookies.set('user', {username}, { expires: 30 })
      //   dispatch(handleLogin({ username }))
      // }
    } catch (error) {
      console.log(error)
      message.error('登录失败')
    }
  }
}

export const logout = () => {
  return async dispatch => {
    Cookies.remove('user')
    dispatch(handleLogout())
  }
}
