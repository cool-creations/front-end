import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "25px",

    maxWidth: theme.maxWidth,

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {}
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.maxWidth
  }
}));

const CategoryCardsContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.centered}>
      <div className={classes.root}>{children}</div>
    </div>
  );
};

export default CategoryCardsContainer;
