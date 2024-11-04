import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
  return (
    <UnorderedList>
      <StyledLink to={'/home'}>Home</StyledLink>
      <StyledLink to={'/reservation'}>Reservation</StyledLink>
      <StyledLink to={'/order-online'}>Order Online</StyledLink>
      <StyledLink to={'/menu'}>Menu</StyledLink>
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #495e57;
  &:hover {
    color: #ffc96f;
  }
`;

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #ffc96f;
  }
`;

export default NavBar;
