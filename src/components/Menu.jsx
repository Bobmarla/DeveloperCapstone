import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  return (
    <MenuContainer>
      <MenuHeader>Our Menu</MenuHeader>
      <MenuContent>
        <MenuColumn>
          <SectionTitle>Drinks</SectionTitle>
          <MenuItem>
            <ItemName>Coffee</ItemName>
            <ItemPrice>$3.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Tea</ItemName>
            <ItemPrice>$2.50</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Soda</ItemName>
            <ItemPrice>$1.50</ItemPrice>
          </MenuItem>

          <SectionTitle>Desserts</SectionTitle>
          <MenuItem>
            <ItemName>Chocolate Cake</ItemName>
            <ItemPrice>$4.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Ice Cream</ItemName>
            <ItemPrice>$3.50</ItemPrice>
          </MenuItem>
        </MenuColumn>
        <MenuColumn>
          <SectionTitle>Main Dishes</SectionTitle>
          <MenuItem>
            <ItemName>Grilled Chicken</ItemName>
            <ItemPrice>$10.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Vegetable Stir Fry</ItemName>
            <ItemPrice>$9.00</ItemPrice>
          </MenuItem>

          <SectionTitle>Breakfast</SectionTitle>
          <MenuItem>
            <ItemName>Pancakes</ItemName>
            <ItemPrice>$5.00</ItemPrice>
          </MenuItem>
          <MenuItem>
            <ItemName>Omelette</ItemName>
            <ItemPrice>$6.00</ItemPrice>
          </MenuItem>
        </MenuColumn>
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
  color: #333;
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
  color: #444;
  border-bottom: 2px solid #555;
  padding-bottom: 5px;
`;

const MenuItem = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.span`
  color: #666;
`;

const ItemPrice = styled.span`
  color: #333;
  font-weight: bold;
`;

export default Menu;
