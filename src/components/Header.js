import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <a href="#">
        <h1>BETA</h1>
      </a>
      <Menu>
        <a href="#">Brand 1</a>

        <a href="#">Brand 2</a>

        <a href="#">Brand 3</a>

        <a href="#">Brand 4</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Beta Account</a>
        <CustomMenu />
      </RightMenu>
      {/* <BurgerNav>
        <li></li>
      </BurgerNav> */}
    </Container>
  );
};

export default Header;
