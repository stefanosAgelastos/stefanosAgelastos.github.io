import React, { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import InfoIcon from "@material-ui/icons/Info";
import { Pantone } from './theme';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    warning: {
      backgroundColor: Pantone.VibrantYellow,
      color: _theme.palette.text.secondary,
      fontWeight: "bold"
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
        horizontal: "center"
      }}
      open={open}
      /*       autoHideDuration={15000} */
      onClose={handleClose}
      ContentProps={{
        "aria-describedby": "message-id",
        classes: { root: classes.warning }
      }}
      message={
        <React.Fragment>
          <InfoIcon fontSize={"large"} />
          <br />
          <span id="message-id">
            Page under development, I am sorrry for the bad experience.
            <br />
            <br />
            At the moment, I have only the following projects updated:
            <br />
            <a href="/projects/next-js-homepage"> My portfolio webpage project </a>
            <br />
            <a href="/projects/ar-tour-guide"> AR Prototype System </a>
           { "  & " }
            <a href="/projects/chat-webapp-node-js">Make your own chat room</a>
            <br />
            There you can find more content.
            <br />
            Have a look!
          </span>
        </React.Fragment>
      }
      action={[
        <Button key="undo" color="secondary" size="small" onClick={handleClose}>
          I understand
        </Button>
      ]}
    />
  );
}
