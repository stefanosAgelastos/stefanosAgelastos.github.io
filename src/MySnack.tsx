import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    warning: {
        backgroundColor: "#FFBF00",
    }
  })
);

export default function SimpleSnackbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, []); // run an effect and clean it up only once (on mount and unmount)

  function handleClose(
    _event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={15000}
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id",        
      }}
      className={classes.warning}
      message={
        <span id="message-id">
          Page under development, I am sorrry for the bad experience. 
          <br/>
          <br/>
           These are the pages with the most interesting content at the moment: 
          <br/>
          <a href="/projects/ar-admin-page"> AR project </a>
          <br/>
          <a href="/projects/ar-admin-page">Node Chat</a>
        </span>
      }
      action={[
        <Button key="undo" color="secondary" size="small" onClick={handleClose}>
          I understand
        </Button>,
        <WarningIcon />
      ]}
    />
  );
}
