import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";
import { Typography, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
      }
    },
    spacer: {
      flex: 1,
      visibility: "hidden"
    },
    toolbarTitle: {
      flex: 1
    },
    homeButton: {
      flex: 1,
      visibility: (props: HeaderProps) =>
        props.homeButtonVisible ? "visible" : "hidden"
    }
  })
);

type HeaderProps = {
  homeButtonVisible: boolean | undefined;
  galleryButtonVisible: boolean | undefined;
};

export default function Header(props: HeaderProps) {
  const classes = useStyles(props);
  return (
    <Toolbar className={classes.toolbar}>
      <Button href="#" className={classes.spacer}>{"spacer"}</Button>
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
      {/*           <IconButton>
      <SearchIcon />
    </IconButton> */}
      <Link href="/">
        <Button size="small" className={classes.homeButton}>
          Back to home
        </Button>
      </Link>
    </Toolbar>
  );
}
