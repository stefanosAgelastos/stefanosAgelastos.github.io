import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import theme from './theme';

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="left">
      {'© Stefanos Agelastos '}
      {new Date().getFullYear()}
      {', Copenhagen, DK. '}
      <br/>
      {'Built with '}
      <Link color="inherit" href="https://material-ui.com/">
      {'Material-UI'}
      </Link>
      {' & '}
      <Link color="inherit" href="https://nextjs.org/">
      {'Next.js'}
      </Link>
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(_theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    marginTop: "auto",
    padding: theme.spacing(2)
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
      <footer className={classes.footer} >
        <Container >
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
