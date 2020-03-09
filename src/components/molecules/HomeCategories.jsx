import React from "react";
import CategoryCard from "./CategoryCard";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const HomeCategories = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.centered}>
      <div className={classes.root}>
        <CategoryCard
          title="Deco-mesh Wreaths"
          description="A collection of different wreaths for different occasians ranging from  "
          onClick={() => history.push("/decowreaths")}
        />

        <CategoryCard
          title="Cork Key Chains"
          description="A collection of different wreaths for different occasians ranging from  "
        />
        <CategoryCard
          title="Quilted Items"
          description="A collection of different wreaths for different occasians ranging from  "
          disabled
        />
        <CategoryCard
          title="Cat Beds"
          description="A collection of different wreaths for different occasians ranging from  "
          disabled
        />
      </div>
    </div>
  );
};

export default HomeCategories;
