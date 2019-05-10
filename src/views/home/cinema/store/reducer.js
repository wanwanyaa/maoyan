import {
  INPUT_CHANGE,
  ADD_TODO,
  DEL_TODO
} from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  inputVal: 'hello',
  todoList: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return state.set('inputVal',action.value)

    case ADD_TODO:
        let newList = state.get('todoList').push(state.get('inputVal'))
        state = state.set('todoList',newList)
        state = state.set('inputVal','')
      return state

    case DEL_TODO:
        let newList2 = state.get('todoList').splice(action.index,1)
        state = state.set('todoList',newList2)
      return state

    default:
      return state;
  }
}

