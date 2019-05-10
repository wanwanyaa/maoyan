import { combineReducers } from 'redux-immutable'
import getTodo from '@/views/home/cinema/store/reducer'
import getMovie from '@/views/home/movie/store/reducer'
import getUser from '@/views/login/store/reducer'
export default combineReducers({
  todo: getTodo,
  movie: getMovie,
  user: getUser
})
