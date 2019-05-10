import styled from 'styled-components'
import search_icon from '@/assets/images/search_icon.png'
import bg from '@/assets/images/bg.png'

export const Topbar = styled.section`
  border-bottom: 1px solid #e6e6e6;
  height: 44px;
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 99;
  background: #fff;
  .topbar-bg{
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;
    .city-entry{
      padding-left: 15px;
      font-size: 15px;
      color: #666;
      display: flex;
      align-items: center;
    }
    .switch-hot{
      display: flex;
      height: 44px;
      line-height: 44px;
      position: relative;
      .hot-item{
        font-size: 15px;
        color: #666;
        width: 80px;
        width: 21.33333vw;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
        &.active{
          color: #ef4238;
        }
      }
    }
    .search-icon{
        width: 20px;
        height: 20px;
        background: url(${search_icon}) 10px no-repeat;
        background-size: 20px;
        padding: 10px 15px 10px 10px;
      }
  }
`

export const MovieHot = styled.div`
  margin-bottom: 50px;
  padding-right: 15px;
  background: #fff;
  padding-top: 94px;
`

export const MovieList = styled.div`
  padding-left: 15px;
  background-color: #fff;
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .main-block{
    position: relative;
    width: 100%;
    .avatar{
      width: 64px;
      height: 90px;
      position: relative;
      margin-top: 12px;
      float: left;
      img{
        height: 90px;
      }
    }
    .mb-outline-b{
      padding: 12px 14px 12px 0;
      margin-left: 74px;
      height: 90px;
      max-height: 90px;
      position: relative;
      background: url(${bg}) 0 bottom repeat-x;
      .content{
        padding-right: 5px;
        margin-right: 48px;
        overflow: hidden;
      }
      .column{
        .movie-title{
          max-height: 24px;
          margin-bottom: 7px;
          line-height: 24px;
          overflow: hidden;
          .title{
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
            flex-shrink: 1;
          }
        }
        .detail{
          box-sizing: border-box;
          line-height: 1;
          overflow: hidden;
          &>div+div{
              margin-top: 6px;
              line-height: 15px;
          }
          .score{
            font-size: 13px;
            color: #666;
            .grade{
              font-weight: 700;
              color: #faaf00;
              font-size: 15px;
            }
          }
          .actor{
            font-size: 13px;
            color: #666;
          }
          .show-info{
            font-size: 13px;
            color: #666;
          }
        }
      }
      .button-block{
        font-size: 12px;
        position: absolute;
        right: 14px;
        top: 0;
        bottom: 0;
        height: 27px;
        margin: auto;
        .btn{
          width: 47px;
          height: 27px;
          line-height: 28px;
          text-align: center;
          box-sizing: border-box;
          background-color: #f03d37;
          color: #fff;
          border-radius: 4px;
          white-space: nowrap;
          font-size: 12px;
          cursor: pointer;
        }
        .pre {
          background-color: #3c9fe6;
        }

      }
    }
  }
`
