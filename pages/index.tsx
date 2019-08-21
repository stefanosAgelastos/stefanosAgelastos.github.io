import { NextPage } from "next";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Typography,
  Button,
  } from "@material-ui/core";
import { MyPaper } from "../src/MyHeroPaper";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleText: {
      /*       textShadow: "#000000 -1px 4px 10px" */
    },
    root: {
      height: "100%",
      flexGrow: 1, //so that it beats the footers topMargin: auto.
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
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
    <div className={classes.root}>
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
    </div>
  );
};

export default IndexPage;
