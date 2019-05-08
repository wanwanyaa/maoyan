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
  return {
    type: DEL_TODO,
    index
  }
}

export default {
  getInputAction,
  getAddtodoAction,
  getDeltodoAction
}
