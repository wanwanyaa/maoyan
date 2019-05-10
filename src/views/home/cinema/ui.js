import React from 'react';
import { InputItem, Button, Flex, List, WhiteSpace } from 'antd-mobile'

class UI extends React.Component {
  render () {
    const { inputVal, todoList, setInputval, addTodo, delTodo } = this.props
    console.log(todoList)
    return (
      <div>
        {/* <Header title="影院"></Header> */}
        <Flex>
          <Flex.Item>
            <InputItem value={ inputVal } onChange={ setInputval }></InputItem>
          </Flex.Item>
          <Flex.Item>
            <Button onClick={ addTodo }>Add</Button>
          </Flex.Item>
        </Flex>
        <WhiteSpace />
        <List>
          {
            todoList.map((item, index) => {
              return (
                <List.Item onClick={ delTodo.bind(null, index) } key={ index }>{item}</List.Item>
              )
            })
          }

        </List>
      </div>
    )
  }
}
export default UI
