import Cookies from 'js-cookie'
import { HANDLE_LOGIN, HANDLE_LOGOUT } from './action-types'

const user = Cookies.get('user')

const defaultState = {
  user: user ? JSON.parse(user) : { username: '', logined: false },
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      return {
        ...state,
        user: action.value,
      }
    case HANDLE_LOGOUT:
      return {
        ...state,
        user: { username: '', logined: false },
      }
    default:
      return state
  }
}
