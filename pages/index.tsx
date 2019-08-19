import React from "react";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Typography,
} from "@material-ui/core";
import MyPaper from "../src/MyHeroPaper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        backgroundImage: "url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3)
    },
    titleText: {
/*       textShadow: "#000000 -1px 4px 10px" */
    },
    galleryButton: {
      color: theme.palette.primary.contrastText,
      boxShadow: theme.shadows[3]
    }
  })
);

const IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
        <MyPaper
          backgroundimageurl={
            "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
          }
        >
          <Typography
            className={classes.titleText}
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            Hey! I&apos;m Stefanos and this is my developer portfolio.
        </Typography>
          <Typography
            className={classes.titleText}
            variant="h5"
            color="inherit"
            paragraph
          >
            Have a look at my projects
        </Typography>
{/*           <Link href="/projects" passHref>
            <Button
              variant="outlined"
              size="medium"
              className={classes.galleryButton}
            >
              Project Gallery
            <TouchAppIcon />
            </Button>
          </Link> */}
        </MyPaper>
    </React.Fragment>
  );
};

export default IndexPage;
