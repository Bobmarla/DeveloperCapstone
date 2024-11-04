import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../data/data';

const Menu = () => {
  const sections = Array.from(new Set(menuItems.map((item) => item.section)));
  return (
    <MenuContainer>
      <MenuHeader>Our Menu</MenuHeader>
      <MenuContent>
        {sections.map((section) => (
          <MenuColumn key={section}>
            <SectionTitle>{section}</SectionTitle>
            {menuItems
              .filter((item) => item.section === section)
              .map((item, index) => (
                <MenuItem key={index}>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </MenuItem>
              ))}
          </MenuColumn>
        ))}
      </MenuContent>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff9d0;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const MenuHeader = styled.h1`
  text-align: center;
  color: #495e57;
`;

const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuColumn = styled.div`
  flex: 1;
  padding: 10px;
  margin: 0 10px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
`;

const SectionTitle = styled.h2`
  color: #495e57;
  border-bottom: 2px solid #555;
  padding-bottom: 5px;
`;

const MenuItem = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.span`
  color: #495e57;
`;

const ItemPrice = styled.span`
  color: #495e57;
  font-weight: bold;
`;

export default Menu;
