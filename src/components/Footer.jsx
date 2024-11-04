import React from 'react';
import { styled } from 'styled-components';
import footerLogo from '../assets/footerLogo.png';
const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src={footerLogo} alt="Logo" />
      <FooterText>
        &copy; 2024 Little Lemon by Maral Sainbat. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #40a578;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FooterImage = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

const FooterText = styled.p`
  margin: 0;
`;
export default Footer;
