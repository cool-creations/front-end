import React from "react";
import CategoryCard from "./CategoryCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "25px",

    maxWidth: theme.maxWidth,

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",

    // display: "grid",
    // gridGap: 15,
    // gridTemplateColumns: "repeat(3, 300px)",
    // alignContent: "space-around",
    // justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {}
  },
  button: {
    marginTop: 25,
    padding: 20
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.maxWidth
  }
}));

const HomeCategories = () => {
  const classes = useStyles();
  return (
    <div className={classes.centered}>
      <div className={classes.root}>
        <CategoryCard
          title="Deco-mesh Wreaths"
          description="A collection of different wreaths for different occasians ranging from  "
        />

        <CategoryCard
          title="Deco-mesh Wreaths"
          description="A collection of different wreaths for different occasians ranging from  "
        />
        <CategoryCard
          title="Deco-mesh Wreaths"
          description="A collection of different wreaths for different occasians ranging from  "
        />
        <CategoryCard
          title="Deco-mesh Wreaths"
          description="A collection of different wreaths for different occasians ranging from  "
        />
      </div>
    </div>
  );
};

export default HomeCategories;
