import styled from 'styled-components';
export const Tabswrapper = styled.ul`
  height: 48px;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  background: #fff;
`
export const TabItem = styled.li`
  flex: 1;
  height: 48px;
  line-height: 48px;
  text-align: center;
  a{
    text-decoration: none;
    /* color: #ccc; */
    font-size: 12px;
  }
`
