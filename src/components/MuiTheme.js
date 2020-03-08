import { createMuiTheme } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: blueGrey
  },
  maxWidth: "1800px"
});

export default theme;
