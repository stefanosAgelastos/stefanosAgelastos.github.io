import React from "react";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { loadCSS } from "fg-loadcss";

import {
  Theme,
  createStyles,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Icon
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(4)
    },
    icon: {
      margin: theme.spacing(2)
    },
    iconHover: {
      margin: theme.spacing(2),
      "&:hover": {
        color: "red"
      }
    },
    root: {
      height: "100%",
      flexGrow: 1, //so that it beats the footers topMargin: auto.
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      display: "flex",
      backgroundColor: theme.palette.background.default,
    },
    cardDetails: {
      flex: 1,
      color: theme.palette.secondary.main,
      textAlign: "right"
    },
    cardGrid: {
      marginTop: theme.spacing(2)
    },
    cardMedia: {
      width: 160
    }
  })
);

const featuredPosts = [
  {
    title: "Github",
    icon: "fab fa-github",
    description: "",
    linkText: "",
    link: "https://github.com/stefanosAgelastos",
  },
  {
    title: "Personal life",
    icon: "fab fa-instagram",
    description: "Get to know what I like to post about.",
    linkText: "",
    link: "https://www.instagram.com/volatilemercury/",
  },
  {
    title: "LinkedIn",
    icon: "fab fa-linkedin",
    description: "Currently I am searching for an inspiring job opportunity.",
    linkText: "",
    link: "https://www.linkedin.com/in/stefanosagelastos/",
  },
  {
    title: "Get in touch",
    icon: "fas fa-envelope",
    description: "sagelastos@gmail.com",
    linkText: "",
    link: "mailto:sagelastos@gmail.com",
  },
  {
    title: "or Just ring",
    icon: "fas fa-phone",
    description: "+45 7158 7288",
    linkText: "",
    link: "tel:71-58-72-88",
  },
];

const ContactPage: NextPage = () => {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          className={classes.cardGrid}
          justify="space-evenly"
          alignItems="center"
          container
        >
          {featuredPosts.map(post => (
            <Grid item key={post.title} xs={10}>
              <CardActionArea component="a" href={post.link}>
                <Card elevation={0} className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      {/*<Typography variant="subtitle1" color="textSecondary"> </Typography> */}
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {post.linkText}
                      </Typography>
                    </CardContent>
                  </div>

                  <Icon
                    className={clsx(classes.icon, post.icon)}
                    color="secondary"
                    fontSize="large"
                  />
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
