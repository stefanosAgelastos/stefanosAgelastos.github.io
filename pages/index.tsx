import React from 'react';
import { NextPage } from 'next'
import { makeStyles } from '@material-ui/styles';
import { Theme, createStyles, Grid, Typography, Link, CardActionArea, Card, CardContent, Hidden, CardMedia } from '@material-ui/core';
import MyPaper from '../src/MyPaper';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    }
  })
);

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      < MyPaper backgroundimageurl={"https://source.unsplash.com/user/erondu"} >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Title of a longer featured blog post
      </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Multiple lines of text that form the lede, informing new readers quickly and
          efficiently about what&apos;s most interesting in this post&apos;s contents.
      </Typography>
        <Link variant="subtitle1" href="#">
          Continue reading…
      </Link>
      </MyPaper >
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
                      Continue reading...
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
  )
}

export default IndexPage