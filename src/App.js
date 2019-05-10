import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Home from './views/home'
import Detail from './views/movieDetail'
import Login from './views/login'
import withLogin from '@/common/withLogin'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shows/:movieId" component={ Detail }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/" component={ withLogin(Home) }></Route>
      </Switch>
    </div>
  );
}

export default App;
