import React from 'react';
import store from '@/store';
import createActions from './store/createActions';
import UI from './ui';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movieList: store.getState().getIn(['movie','movieList'])
    }
    this.subDel =  store.subscribe(() => {
      this.setState(() => ({
        movieList: store.getState().getIn(['movie','movieList'])
      }))
    })
  }
  render () {
    return (
      <UI
        movieList={ this.state.movieList }
      />
    )
  }
  componentDidMount () {
    store.dispatch(createActions.getAddMovieAction)
  }

  componentWillUnmount () {
    this.subDel()
  }
}

export default Movie
