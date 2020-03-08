import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import mainreducer from "./store/reducers/mainreducer";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialTheme } from "@material-ui/core";
import MuiTheme from "./components/MuiTheme";
import { theme1 } from "./components/theme";

import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(mainreducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme1}>
        <MaterialTheme theme={MuiTheme}>
          <App />
        </MaterialTheme>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
