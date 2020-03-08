import React from "react";
import styled from "styled-components";
import HomeHeader from "../molecules/HomeHeader";
import HomeCategories from "../molecules/HomeCategories";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeHeader />
      <HomeCategories />
    </Container>
  );
};

export default HomePage;
