import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import IconTabs from "./MyIconTabs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      paddingTop: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    spacer: {
      paddingTop: theme.spacing(8),
      visibility: "hidden"
    },
    toolbarTitle: {
      flex: 1
    }
  })
);

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

export default function ElevateAppBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.spacer}> {"spacer"} </div>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            STEFWORKS
          </Typography>
          <IconTabs />
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}