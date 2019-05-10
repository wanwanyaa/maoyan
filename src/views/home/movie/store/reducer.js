import {
  ADD_MOVIE
} from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  movieList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return state.set('movieList',action.movieList)
    default:
      return state
  }
}
