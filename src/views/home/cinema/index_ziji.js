import React from 'react';
// import Header from '@/common/header'
import store from '@/store'
import createActions from './store/createActions'
import UI from './ui'

class Cinema extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputVal: store.getState().todo.inputVal,
      todoList: store.getState().todo.todoList
    }
    this.setInputval = this.setInputval.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.delTodo = this.delTodo.bind(this)
    this.subDel =  store.subscribe(() => {
      this.setState(() => ({
        inputVal: store.getState().todo.inputVal,
        todoList: store.getState().todo.todoList
      }))
    })
  }

  setInputval (value) {
    store.dispatch(createActions.getInputAction(value))
  }

  addTodo () {
    store.dispatch(createActions.getAddtodoAction())
  }

  delTodo (index){
    store.dispatch(createActions.getDeltodoAction(index))
  }

  render () {
    return (
      <UI
        inputVal={ this.state.inputVal }
        todoList={ this.state.todoList }
        setInputval={ this.setInputval }
        addTodo={ this.addTodo }
        delTodo={ this.delTodo }
      />
    )
  }

  componentWillUnmount () {
    this.subDel()
  }
}

export default Cinema
