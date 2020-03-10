import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageHeader from "../molecules/ImageHeader";
import backgroundImg from "../../images/wreath.jpg";
import LItem from "../atoms/LItem";
import SmallCard from "../molecules/SmallCard";
import wreathTypes from "../../data/wreathsData";

import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  list: {
    fontFamily: "Roboto",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 350,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400
    }
  },
  listsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    justifyItems: "center",
    gap: "25px",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 25,
    maxWidth: theme.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  }
}));

const length = wreathTypes.length;
const distribution = 3;
const listItemsAmount = length / distribution;

const DecoMeshWreathsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageHeader
        title="Deco-Mesh Wreaths"
        image={backgroundImg}
        height="300px"
      />

      <div className={classes.listsContainer}>
        {/* <List className={classes.list}> */}
        {wreathTypes.map((type, index) => (
          // <LItem text={type} key={index} />
          <SmallCard title={type} key={index} />
        ))}
        {/* </List> */}
      </div>
    </div>
  );
};

export default DecoMeshWreathsPage;
