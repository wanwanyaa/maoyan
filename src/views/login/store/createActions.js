import {
  SET_CHANGE,
  SET_USER
} from './actionTypes'
import store from '@/store'
import http from '@/utils/http'
import { Toast } from 'antd-mobile'

const setChangeAction = (key,value) => {
  return (dispath) => {
    dispath({
      type: SET_CHANGE,
      key,
      value
    })
  }
}

const setLoginAction = (history,location) => {
  return (dispatch) => {
    http.post('http://localhost:4000/api/auth',{
      username:store.getState().getIn(['user','username']),
      password:store.getState().getIn(['user','password'])
    })
      .then(res => {
        const search = location.search.substr(10)
        if(res.code === 0){
          Toast.success('成了')
          window.sessionStorage.setItem('user',res.username)
          // function a (x) {
            // return new Promise((resolve)=>{
              dispatch({
                type: SET_USER,
                user: res.username
              })
              // resolve(true);
            // })
          // }
          // async function f1() {
            // var x = await a(10);
            // console.log(x); // 10

            // if(x) {
              console.log(1111);
              console.log(search === 'movie');
              setTimeout(() => {
                history.replace(`/movie`)
              }, 1000)

            // }
          // }
          // f1()
        }
      })
  }
}

export default {
  setChangeAction,
  setLoginAction
}
