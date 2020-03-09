import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";
import ShoppingCartPage from "./components/organisms/ShoppingCartPage";
import styled from "styled-components";
import DecoMeshWreathsPage from "./components/organisms/DecoMeshWreathsPage";

const Container = styled.div`
  font-family: "Alegreya", serif;
`;

function App() {
  return (
    <Container>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/cart">
        <NavBar solid />
        <ShoppingCartPage />
      </Route>

      <Route exact path="/decowreaths">
        <NavBar />
        <DecoMeshWreathsPage />
      </Route>

      <Route exact path="/category/:categoryId"></Route>
    </Container>
  );
}

export default App;
