import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 75px;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.color1};
`;

const NavBar = () => {
  return <Container>Test</Container>;
};

export default NavBar;
