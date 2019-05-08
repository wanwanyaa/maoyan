import {
  ADD_MOVIE
} from './actionTypes'

const defaultState = {
  movieList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return Object.assign({},state,{
        movieList: action.movieList
      })
    default:
      return state
  }
}
