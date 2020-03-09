import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const CategoryViewPage = () => {
  const { categoryId } = useParams();
  const classes = useStyles();
  return <div></div>;
};

export default CategoryViewPage;
