const defaultState = {
  inputVal: 'hello',
  todoList: [],
  movieList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {
        inputVal: action.value
      })

    case 'ADD_TODO':
      return Object.assign({},state,{
        todoList: [...state.todoList,state.inputVal]
      })

    case 'DEL_TODO':
      let newList = [...state.todoList]
      newList.splice(action.index, 1)
      return Object.assign({},state,{
        todoList: newList
      })

    case 'ADD_MOVIE':
      return Object.assign({},state,{
        movieList: action.movieList
      })
    default:
      return state
  }
}
