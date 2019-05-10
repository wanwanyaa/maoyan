import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movie from './movie';
import Cinema from './cinema';
import Center from './center';
import Tabs from '../../common/tabs';
import withLogin from '@/common/withLogin'

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      navList: [
        { id: 'movie', name: '电影', icon: '' },
        { id: 'cinema', name: '影院', icon: '' },
        { id: 'center', name: '我的', icon: '' },
      ]
    }
  }
  render () {
    return (
      <div>
        <Switch>
          <Route path="/movie" component={ withLogin(Movie) }></Route>
          <Route path="/cinema" component={ withLogin(Cinema) }></Route>
          <Route path="/center" component={ Center }></Route>
          <Redirect to="/movie"></Redirect>
        </Switch>
        <Tabs navList={ this.state.navList }></Tabs>
      </div>
    )
  }
}

export default Home
