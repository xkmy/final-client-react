import Cookies from 'js-cookie'
import { HANDLE_LOGIN, HANDLE_LOGOUT } from './action-types'

const defaultState = {
  user: JSON.parse(Cookies.get('user')) || {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      console.log(action.value)
      return {
        ...state,
        user: action.value
      }
    case HANDLE_LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
