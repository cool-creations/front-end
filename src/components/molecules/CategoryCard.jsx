import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    marginBottom: "25px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    [muiBaseTheme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  },
  button: {
    marginTop: 10
  }
});

const CategoryCard = ({ classes, image, title, description }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent className={classes.content}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {title}
        </Typography>
        <Divider className={classes.divider} light />

        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          {description}
        </Typography>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          fullWidth
        >
          Test
        </Button>
      </CardContent>
    </Card>
  );
};

const WrappedApp = withStyles(styles)(CategoryCard);

export default WrappedApp;
