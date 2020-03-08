import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";

import styled from "styled-components";

const Container = styled.div`
  font-family: "Alegreya", serif;
`;

function App() {
  return (
    <Container>
      <Route exact path="/">
        {/* <NavBar /> */}
        <HomePage />
      </Route>
    </Container>
  );
}

export default App;
