import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Chip,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    chip: {
      margin: theme.spacing(1)
    },
    panelRoot: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  })
);

export const MainGrid: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
}

export const HeaderTitle: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
}

export const InfoGrid: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Grid item xs={12} md={6} container direction="column">
      {children}
    </Grid>
  );
}

export const InfoPaper: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
}

export type MyChipProps = {
  label: string;
};

export const MyChip: React.FunctionComponent<{}> = ({ children, ...props }) => {
  const classes = useStyles();
  const {label} = props as MyChipProps;
  return (
    <Chip className={classes.chip} label={label}>
      {" "}
      {children}{" "}
    </Chip>
  );
}

export const PanelGrid: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.panelRoot}>{children}</div>
    </Grid>
  );
}
export const Panel: React.FunctionComponent<{}> = ({ children }) => {
  return <ExpansionPanel>{children}</ExpansionPanel>;
}

export type MyPanelSummaryProps = {
  id: string;
  label: string;
};

export const PanelSummary: React.FunctionComponent<{}> = ({ children, ...props}) => {
  const classes = useStyles();
  const {id, label} = props as MyPanelSummaryProps;
  return (
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}bh-content`}
        id={id}
      >
        <Typography className={classes.heading}>{label}</Typography>
        <Typography className={classes.secondaryHeading}>
          {children}
        </Typography>
      </ExpansionPanelSummary>
  );
}
export const PanelContent: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <ExpansionPanelDetails>
      <Typography>{children}</Typography>
    </ExpansionPanelDetails>
  );
}
