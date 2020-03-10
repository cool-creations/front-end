import React from "react";
import ImageHeader from "../molecules/ImageHeader";
import { makeStyles } from "@material-ui/core";
import bgImage from "../../images/background4_.jpg";
import BioCard from "../molecules/BioCard";

const useStyles = makeStyles(theme => ({
  root: {},
  contentContainer: {
    display: "flex",
    padding: 25,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div>
      <ImageHeader title="About Us" height="400px" image={bgImage} />
      <div className={classes.contentContainer}>
        <BioCard
          name="Susan Robertson"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla odio, porta sit amet ultricies at, sagittis ut urna. Suspendisse potenti. Etiam consectetur, dui dictum sollicitudin efficitur, dui felis tristique arcu, et varius nibh risus ac ipsum. Vivamus molestie enim metus, et luctus felis semper eu. Pellentesque nec eros tempus erat vehicula pharetra vitae vitae mauris. "
          image="https://via.placeholder.com/500"
        />
        <BioCard
          name="Eva Breitwieser"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla odio, porta sit amet ultricies at, sagittis ut urna. Suspendisse potenti. Etiam consectetur, dui dictum sollicitudin efficitur, dui felis tristique arcu, et varius nibh risus ac ipsum. Vivamus molestie enim metus, et luctus felis semper eu. Pellentesque nec eros tempus erat vehicula pharetra vitae vitae mauris. "
          image="https://via.placeholder.com/500"
        />
      </div>
    </div>
  );
};

export default AboutPage;
