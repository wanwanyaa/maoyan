import React from 'react';
import Header from '@/common/header'
import http from '@/utils/http'
import store from '@/store'
import {
  Topbar,
  MovieList,
  MovieHot
} from './style'
import createActions from './store/createActions'

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movieList: store.getState().movie.movieList
    }
    this.subDel =  store.subscribe(() => {
      this.setState(() => ({
        movieList: store.getState().movie.movieList
      }))
    })
  }
  render () {
    const { movieList } = this.state
    return (
      <div>
        <Header></Header>
        <Topbar>
          <div className="white-bg topbar-bg">
            <div className="city-entry">
              <span className="city-name">深圳</span>
              <i className="city-entry-arrow"></i>
            </div>

            <div className="switch-hot">
              <div className="hot-item active">正在热映</div>
              <div className="hot-item ">即将上映</div>
            </div>
            <div className="search-entry search-icon"></div>
          </div>
        </Topbar>
        <MovieHot>
          {
            movieList.map(item => {
              return (
                <MovieList key={ item.id }>
                  <div className="main-block">
                    <div className="avatar">
                      <div className="default-img-bg">
                        <img src={ item.img.replace('w.h','128.180') } alt=""/>
                      </div>
                    </div>
                    <div className="mb-outline-b content-wrapper">
                      <div className="column content">
                        <div className="box-flex movie-title">
                          <div className="title line-ellipsis v3dimax_title">{ item.nm }</div>
                            <span className="version v3d imax"></span>
                        </div>
                        <div className="detail column">

                                {
                                  item.showst === 4 ? (
                                  <div className="score line-ellipsis">
                                    <span className="grade">{ item.wish }</span>
                                    <span className="score-suffix"> 人想看</span>
                                  </div>
                                  )
                                  : (
                                    <div className="score line-ellipsis">
                                      <span className="score-suffix">观众评 </span>
                                      <span className="grade">{ item.sc }</span>
                                    </div>
                                  )
                                }


                            <div className="actor line-ellipsis">{item.star}</div>
                            <div className="show-info line-ellipsis">{item.showInfo}</div>
                        </div>
                      </div>
                      <div className="button-block" data-id="248172">
                        {
                          item.showst === 3 ? (
                            <div className="btn normal">
                              <span className="fix">购票</span>
                            </div>
                          )
                          : (<div className="btn pre">
                              <span className="fix">预售</span>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </MovieList>
              )
            })
          }

        </MovieHot>
      </div>
    )
  }
  componentDidMount () {
    http.get('/ajax/movieOnInfoList?token=').then(res=>{
      store.dispatch(createActions.getAddMovieAction(res.movieList))
    })
  }
  componentWillUnmount () {
    this.subDel()
  }
}

export default Movie
