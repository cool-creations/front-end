import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageHeader from "../molecules/ImageHeader";
import backgroundImg from "../../images/wreath.jpg";
import CategoryCardsContainer from "../molecules/CategoryCardsContainer";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const DecoMeshWreathsPage = () => {
  const classes = useStyles();
  return (
    <div>
      <ImageHeader
        title="Deco-Mesh Wreaths"
        image={backgroundImg}
        height="300px"
      />

      <CategoryCardsContainer>
        <List className={classes.root}>
          <ListItem button>Test</ListItem>
        </List>
      </CategoryCardsContainer>
    </div>
  );
};

export default DecoMeshWreathsPage;
