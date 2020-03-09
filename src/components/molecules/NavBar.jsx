import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  shoppingCart: {
    color: "white",
    marginLeft: 15
  }
}));

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0px 40px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ isTop }) => (isTop ? "" : "black")};
  box-sizing: border-box;
  transition: background-color 0.35s;

  z-index: 5;
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
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
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
  const classes = useStyles();
  const [isTop, setTop] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset < 100) {
      setTop(true);
    } else setTop(false);
  };

  useEffect(() => {
    console.log("Wa");
  }, [isTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isTop={isTop}>
      <ContentContainer>
        <Title>Cool Creations</Title>
        <LinksContainer>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <IconButton className={classes.shoppingCart}>
            <ShoppingCartIcon />
          </IconButton>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
};

export default NavBar;
