import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';


const Img = styled.img`
  height: 8rem;
  pointer-events: none;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
  
const H1 = styled.h1`
  font-size: 4rem;
  color: white;
`;  

export class ExchangeHeader extends Component {
  render() {
    return (
      <Header>
        <Img src={logo} alt="React Logo" />
        <H1>Coin Exchange</H1>
      </Header>
    )
  }
}

export default ExchangeHeader;