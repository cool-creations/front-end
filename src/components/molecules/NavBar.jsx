import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0px 40px;
  color: ${({ theme }) => theme.textColor};
  // background-color: ${({ theme }) => theme.color1};
  box-sizing: border-box;

  max-width: ${({ theme }) => theme.maxWidth}
`;

const Title = styled.h2`
  margin: 0px;
  text-align: center;
  padding: 0px;
  font-size: 22px;
  font-family: "Lora", serif;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    position: relative;
    font-size: 21.5px;
    color: ${({ theme }) => theme.textColor};
    margin-left: 20px;
    font-family: "Alegreya Sans", serif;
    // text-transform: uppercase;
  }

  a::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.8);
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
      <ContentContainer>
        <Title>Cool Creations</Title>
        <LinksContainer>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
};

export default NavBar;
