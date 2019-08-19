import React from "react";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { MyPaper } from "../src/MyHeroPaper";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item >
          <MyPaper>
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
            <Link href="/projects" passHref>
              <Button
                variant="outlined"
                size="medium"
                className={classes.galleryButton}
              >
                Project Gallery
            </Button>
            </Link>
          </MyPaper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default IndexPage;
