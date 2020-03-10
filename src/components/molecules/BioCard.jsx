import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: 950,
    marginTop: 25,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  image: {
    width: "100%",
    marginLeft: 100,
    maxWidth: 350,
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: 25
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      maxWidth: 500
    }
  },
  contentContainer: {
    color: "rgb(0,0,0,0.87);"
  },
  name: {
    fontSize: 32,
    marginTop: 5,
    color: "rgb(0,0,0,0.77)",
    [theme.breakpoints.down("xs")]: {
      marginTop: 15
    }
  },
  bio: {
    fontSize: 20,
    textAlign: "justify",
    color: "rgb(0,0,0,0.77)"
  },

  card: {
    width: "100%",
    maxWidth: 500,
    minWidth: 300,
    margin: "auto",
    marginBottom: "25px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "500px"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  button: {
    marginTop: 10
  }
}));

const BioCard = ({ name, description, image }) => {
  const classes = useStyles();
  // return (
  //   <Card className={classes.card}>
  //     <CardMedia className={classes.media} image={image} />
  //     <CardContent className={classes.content}>
  //       <Typography
  //         className={"MuiTypography--heading"}
  //         variant={"h6"}
  //         gutterBottom
  //       >
  //         {name}
  //       </Typography>
  //       <Divider className={classes.divider} light />

  //       <Typography className={"MuiTypography--subheading"} variant={"caption"}>
  //         {description}
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // );
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.bio}>{description}</p>
      </div>

      <img className={classes.image} src={image} />
    </div>
  );
};

export default BioCard;
