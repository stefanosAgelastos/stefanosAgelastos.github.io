import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Stefanos Agelastos
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
      {'Material-UI'}
      </Link>
      {' & '}
      <Link color="inherit" href="https://nextjs.org/">
      {'Next.js'}
      </Link>
      {'. Images from '}
      <Link color="inherit" href="https://unsplash.com">
      {'Unsplash'}
      </Link>
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    marginTop: "auto",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
}));

type FooterProps = {
    children: React.ReactNode;
}

export default function StickyFooter(props: FooterProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {props.children}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
