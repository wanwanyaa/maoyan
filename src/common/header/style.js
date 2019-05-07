import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 50px;
  line-height: 50px;
  background: #e54847;
  display: flex;
  &.isfixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
  }
`
export const Title = styled.h1`
  flex: 1;
  font-size: 18px;
  color: #fff;
  text-align: center;
`
