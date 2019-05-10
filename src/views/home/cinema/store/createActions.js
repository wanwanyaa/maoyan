import {
  INPUT_CHANGE,
  ADD_TODO,
  DEL_TODO
} from './actionTypes'

const getInputAction = (value) => {
  return {
    type: INPUT_CHANGE,
    value
  }
}

const getAddtodoAction = () => {
  return {
    type: ADD_TODO
  }
}

const getDeltodoAction = (index) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: DEL_TODO,
        index
      })
    }, 1000)
  }
}

export default {
  getInputAction,
  getAddtodoAction,
  getDeltodoAction
}
