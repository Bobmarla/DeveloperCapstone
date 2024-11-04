import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import NavBar from './NavBar';

const Header = () => {
  return (
    <Background>
      <Logo />
      <NavBarDiv>
        <NavBar />
      </NavBarDiv>
    </Background>
  );
};

const Background = styled.div`
  background: #40a578;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavBarDiv = styled.div``;
export default Header;
