import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import {
  Theme,
  createStyles,
  Grid,
  Typography,
  CardActionArea,
  Button,
  Card,
  CardContent,
  Hidden,
  CardMedia
} from "@material-ui/core";
import MyPaper from "../src/MyPaper";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(3)
    },
    card: {
      display: "flex"
    },
    cardDetails: {
      flex: 1
    },
    cardMedia: {
      width: 160
    },
    galleryButton: {
      color: theme.palette.primary.contrastText
    }
  })
);

const featuredPosts = [
  {
    title: "My developer blog",
    date: "Nov 12",
    description:
      "In my projects you can see the results of my work with different technologies. I enjoy writing about it on my blog",
    link: "dev.to/stefanosAgelastos"
  },
  {
    title: "Professional info",
    date: "Nov 11",
    description: "Currently I am searching for an inspiring job opportunity.",
    link: "linkedin.com/stefanosAgelastos"
  }
];

const IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MyPaper backgroundimageurl={"https://source.unsplash.com/user/erondu"}>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Hey! I am Stefanos and this is my developer portfolio.
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Here you can learn more about me
        </Typography>
        <Link href="/projects" passHref>
          <Button
            variant="outlined"
            size="small"
            className={classes.galleryButton}
          >
            Browse my Projects{" "}
          </Button>
        </Link>
      </MyPaper>
      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {post.link}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default IndexPage;
