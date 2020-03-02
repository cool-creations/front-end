import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import HomePage from "./components/organisms/HomePage";

function App() {
  return (
    <div>
      <Route exact path="/">
        <NavBar />
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
