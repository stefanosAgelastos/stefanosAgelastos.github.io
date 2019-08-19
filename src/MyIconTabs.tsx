import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Router from 'next/router';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");

  function handleChange(_event: React.ChangeEvent<{}>, newValue: string) {
    Router.push(newValue);
    setValue(newValue);
  }

  useEffect(() => {
    // Set initial state of the Tabs component for SSR
    Router.pathname == "/"
      ? setValue("/")
      : Router.pathname == "/contact"
        ? setValue("/contact")
        : setValue("/projects");

    Router.events.on("routeChangeStart", url => {
      // Change the state of the Tabs depending on URL change
      url == "/"
        ? setValue("/")
        : url == "/contact"
          ? setValue("/contact")
          : setValue("/projects");
    });
  }, []); // run an effect and clean it up only once (on mount and unmount)

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" value="/" />
        <Tab label="My projects" value="/projects" />
        <Tab label="Contact" value="/contact" />
      </Tabs>
    </Paper>
  );
}