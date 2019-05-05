import React from 'react';
import {
  Tabswrapper,
  TabItem
} from './style'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }
  render () {
    const { navList } = this.props
    return (
      <Tabswrapper>
        {
          navList.map(item => {
            return (
              <TabItem key={ item.id }>
                <NavLink to={ `/${item.id}` }>{ item.name }</NavLink>
              </TabItem>
            )
          })
        }
      </Tabswrapper>
    )
  }
}

// prop的校验
Tabs.propTypes = {
  navList: PropTypes.array
}

// prop的默认值
// Tabs.defaultProps = {
//   navList: [],
// }
