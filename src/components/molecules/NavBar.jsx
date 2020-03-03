import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0px 20px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.color1};
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0px;
  text-align: center;
  padding: 0px;
  font-size: 21px;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    position: relative;
    font-size: 21px;
    color: ${({ theme }) => theme.textColor};
    margin-left: 20px;
  }

  a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(0, 0, 0, 0.2);
    content: "";
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(15px);
    -moz-transform: translateY(15px);
    transform: translateY(15px);
  }

  a:hover::after {
    opacity: 1;
    transform: translateY(5px);
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Title>Cool Creations</Title>
      <LinksContainer>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </LinksContainer>
    </Container>
  );
};

export default NavBar;
