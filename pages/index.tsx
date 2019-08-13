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
    titleText: {
      textShadow: '#000000 -1px 4px 10px'
    },
    card: {
      display: "flex"
    },
    cardDetails: {
      flex: 1
    },
    cardGrid: {
      marginTop: theme.spacing(0)
    },
    cardMedia: {
      width: 160
    },
    galleryButton: {
      color: theme.palette.primary.contrastText,
      boxShadow: theme.shadows[3]
    }
  })
);

const featuredPosts = [
  {
    title: "Personal life",
    image:
      "https://images.unsplash.com/photo-1536009282123-37ba63756c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    description:
      "Get to know what I like to remember, and maybe give me some likes!",
    linkText: "My Instagram",
    link: "https://www.instagram.com/volatilemercury/"
  },
  {
    title: "Professional info",
    image: "https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
    description: "Currently I am searching for an inspiring job opportunity.",
    linkText: "My LinkedIn",
    link: "https://www.linkedin.com/in/stefanosagelastos/"
  }
];

const IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MyPaper backgroundimageurl={"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"}>
        <Typography className={classes.titleText} component="h1" variant="h3" color="inherit" gutterBottom>
          Hey! I&apos;m Stefanos and this is my developer portfolio.
        </Typography>
        <Typography className={classes.titleText} variant="h5" color="inherit" paragraph>
          Have a look at my projects
        </Typography>
        <Link href="/projects" passHref>
          <Button
            variant="outlined"
            size="medium"
            className={classes.galleryButton}
          >
            Project Gallery{" "}
          </Button>
        </Link>
      </MyPaper>
      <Grid className={classes.cardGrid} container spacing={4}>
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component="a" href={post.link}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    {/*                     <Typography variant="subtitle1" color="textSecondary">
                    </Typography> */}
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {post.linkText}
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.image}
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
