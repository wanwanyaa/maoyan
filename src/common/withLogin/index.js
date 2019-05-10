import React,{ Fragment } from 'react';

const userLogin = window.sessionStorage.user

const withLogin = (Component) => {

  return class extends React.Component {
    render () {
      const pathName = this.props.location.pathname.substr(1)
      return (
        <Fragment>
          {
            userLogin ? (
              <Component {...this.props}></Component>
            ) : (
              this.props.history.replace(`/login?pathname=${ pathName }`)
            )
          }

        </Fragment>
      )
    }
  }
}

export default withLogin
