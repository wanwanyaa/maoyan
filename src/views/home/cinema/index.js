import React from 'react';
// import Header from '@/common/header'
import store from '@/store'
import { InputItem, Button, Flex, List, WhiteSpace } from 'antd-mobile'
import createActions from './store/createActions'

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
    const { inputVal, todoList } = this.state
    return (
      <div>
        {/* <Header title="影院"></Header> */}
        <Flex>
          <Flex.Item>
            <InputItem value={ inputVal } onChange={ this.setInputval }></InputItem>
          </Flex.Item>
          <Flex.Item>
            <Button onClick={ this.addTodo }>Add</Button>
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <List>
          {
            todoList.map((item, index) => {
              console.log(index)
              return (
                <List.Item onClick={ this.delTodo.bind(null, index) } key={ index }>{item}</List.Item>
              )
            })
          }

        </List>
      </div>
    )
  }

  componentWillUnmount () {
    this.subDel()
  }
}

export default Cinema
