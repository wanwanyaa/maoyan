import {
  ADD_MOVIE
} from './actionTypes'

const getAddMovieAction = (list) => {
  return {
    type: ADD_MOVIE,
    movieList: list
  }
}

export default {
  getAddMovieAction
}
