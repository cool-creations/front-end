import { createMuiTheme } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  breakpoints: {
    about: 660
  },
  palette: {
    primary: brown,
    secondary: blueGrey,
    black: "#1B1C1D",
    background: {
      paper: "#f5f5f5"
    }
  },
  maxWidth: "1800px"
});

export default theme;
