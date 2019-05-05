import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Header from './common/header'
import Home from './views/home'
import Detail from './views/movieDetail'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/shows/:movieId" component={ Detail }></Route>
        <Route path="/" component={ Home }></Route>
      </Switch>
    </div>
  );
}

export default App;
