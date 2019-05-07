import React from 'react'
import {
  HeaderWrapper,
  Title
} from './style'


class Header extends React.Component {
  render () {
    const { title, fixed } = this.props
    return (
      <HeaderWrapper className={ fixed ? 'isfixed' : ''}>
        <Title>{ title }</Title>
      </HeaderWrapper>
    )
  }
}

Header.defaultProps = {
  title: '猫眼电影',
  fixed: true
}


export default Header
