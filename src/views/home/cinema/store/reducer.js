import {
  INPUT_CHANGE,
  ADD_TODO,
  DEL_TODO
} from './actionTypes'

const defaultState = {
  inputVal: 'hello',
  todoList: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return Object.assign({}, state, {
        inputVal: action.value
      })

    case ADD_TODO:
      return Object.assign({},state,{
        todoList: [...state.todoList,state.inputVal],
        inputVal: ''
      })

    case DEL_TODO:
      let newList = [...state.todoList]
      newList.splice(action.index, 1)
      return Object.assign({},state,{
        todoList: newList
      })

    default:
      return state;
  }
}

