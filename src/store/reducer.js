import { combineReducers } from 'redux'
import getTodo from '@/views/home/cinema/store/reducer'
import getMovie from '@/views/home/movie/store/reducer'

export default combineReducers({
  todo: getTodo,
  movie: getMovie
})
