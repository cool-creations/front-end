import React from "react";
import styled from "styled-components";
import backgroundImg from "../../images/background6.jpg";
import NavBar from "./NavBar";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 25,
    padding: 20
  }
}));

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  // background-color: gray;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(85, 77, 77, 0.4) 53%,
      rgba(78, 80, 80, 0.4) 100%
    ),
    url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  // backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
`;

const BigTitle = styled.h2`
  font-size: 50px;
  color: #eee;
  margin: 0;
  letter-spacing: 4px;
  text-align: center;
`;
const SubTitle = styled.p`
  font-size: 25px;
  color: #eee;
  margin: 0;
  margin-top: 5px;
  text-align: center;
  opacity: 0.7;
  letter-spacing: 1px;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <BigTitle>Cool Creations</BigTitle>
        <SubTitle>Hand-made gifts for the home</SubTitle>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          className={classes.button}
        >
          See our products
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default HomeHeader;
