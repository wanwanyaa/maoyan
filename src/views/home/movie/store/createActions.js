import {
  ADD_MOVIE
} from './actionTypes'
import http from '@/utils/http'
import { Toast } from 'antd-mobile'

const getAddMovieAction = (dispatch) => {
  Toast.loading('正在加载中.....',0)
  http.get('/ajax/movieOnInfoList?token=').then(res=>{
    dispatch({
      type: ADD_MOVIE,
      movieList: res.movieList
    })
    Toast.hide()
  })
}

export default {
  getAddMovieAction
}
