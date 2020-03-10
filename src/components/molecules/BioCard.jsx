import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import classes from "*.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  image: {
    width: 252,
    height: 252
  },
  contentContainer: {
    color: "rgb(0,0,0,0.87);"
  }
}));

const BioCard = ({ reversed, name, description, image }) => {
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}></div>

      <img className={classes.image} src={image} />
    </div>
  );
};

export default BioCard;
