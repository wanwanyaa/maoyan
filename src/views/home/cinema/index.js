import { connect } from 'react-redux'
import UI from './ui'
import createActions from './store/createActions'

const mapStateToProps = (state) => {
  return {
    inputVal: state.getIn(['todo','inputVal']),
    todoList: state.getIn(['todo','todoList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setInputval (value) {
      dispatch(createActions.getInputAction(value))
    },
    addTodo () {
      dispatch(createActions.getAddtodoAction())
    },
    delTodo (index) {
      dispatch(createActions.getDeltodoAction(index))
    }
  }
}

const Cinema = connect(
  mapStateToProps,
  mapDispatchToProps
)(UI)

export default Cinema
