import React from 'react'
import { connect } from 'react-redux'
import { InputItem, Button } from 'antd-mobile'
import createActions from './store/createActions'

class Login extends React.Component {
  render() {
    const { username, password, setForm, getLogin } = this.props
    return (
      <div>
        <InputItem
          placeholder="用户名"
          value={ username }
          onChange={ (value) => { setForm('username',value) } }
        />
        <InputItem
          placeholder="密码"
          type="password"
          value={ password }
          onChange={ (value) => { setForm('password',value) } }
        />
        <Button onClick={ getLogin }>登录</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.getIn(['user','username']),
    password: state.getIn(['user','password'])
  }
}

const mapDispatchToProps = (dispatch,Props) => {
  return {
    setForm (key,value) {
      dispatch(createActions.setChangeAction(key,value))
    },
    getLogin () {
      dispatch(createActions.setLoginAction(Props.history,Props.location))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
