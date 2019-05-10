import {
  SET_USER,
  SET_CHANGE
} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  user:'',
  username: '',
  password: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return state.set('user',action.user)

    case SET_CHANGE:
      return state.set(action.key,action.value)

    default:
      return state
  }
}
