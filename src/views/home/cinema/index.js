import React from 'react';
// import Header from '@/common/header'
import store from '@/store'
import { InputItem, Button, Flex, List, WhiteSpace } from 'antd-mobile'

class Cinema extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputVal: store.getState().inputVal,
      todoList: store.getState().todoList
    }
    this.setInputval = this.setInputval.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.delTodo = this.delTodo.bind(this)
    this.subDel =  store.subscribe(() => {
      this.setState(() => ({
        inputVal: store.getState().inputVal,
        todoList: store.getState().todoList
      }))
    })
  }

  setInputval (value) {
    let action = {
      type: 'INPUT_CHANGE',
      value
    }
    store.dispatch(action)
  }

  addTodo () {
    let action = {
      type: 'ADD_TODO'
    }
    store.dispatch(action)
  }

  delTodo (index){
    let action = {
      type: 'DEL_TODO',
      index
    }
    store.dispatch(action)
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
              return (
                <List.Item onClick={ this.delTodo } key={ index }>{item}</List.Item>
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
