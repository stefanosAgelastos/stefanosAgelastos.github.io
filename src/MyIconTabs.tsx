import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Router from "next/router";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "rgba(255,255,255,0)"
    },
    tabRoot: {
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.primary.light,
        opacity: 1
      }
    },
    tabIndicator: {
      backgroundColor: theme.palette.primary.main
    }
  })
);

export default function CenteredTabs() {
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

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.tabIndicator
        }}
        centered
      >
        <Tab
          classes={{
            root: classes.tabRoot,
          }}
          label="Home"
          value="/"
        />
        <Tab
          classes={{
            root: classes.tabRoot,
          }}
          label="My projects"
          value="/projects"
        />
        <Tab
          classes={{
            root: classes.tabRoot,
          }}
          label="Contact"
          value="/contact"
        />
      </Tabs>
    </Paper>
  );
}
