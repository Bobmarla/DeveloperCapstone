import React from 'react';
import { styled } from 'styled-components';
const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  height: 70vh;
  padding: 20px;
  overflow-y: auto;
`;

export default Main;
