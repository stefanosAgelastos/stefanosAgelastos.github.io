import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardMedia from "@material-ui/core/CardMedia";
import DoneIcon from "@material-ui/icons/Done";
import { Pantone } from './theme';
import Link from '@material-ui/core/Link';
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
  ExpansionPanelDetails,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: Pantone.LimpetShell
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: Pantone.SeaPink,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(17)
    },
    actions: {
      margin: theme.spacing(1)
    },
    chip: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.text.secondary,
      fontWeight: "bold",
      color: Pantone.SeaPink,
    },
    chipIcon: {
      color: Pantone.SeaPink
    },
    panelRoot: {
      width: "100%",
      backgroundColor: Pantone.VibrantYellow,
    },
    panelDetails: {
      backgroundColor: theme.palette.background.default,
      color: Pantone.LimpetShell,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      fontWeight: "bold",
      flexBasis: "33.33%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    images: {
      marginTop: theme.spacing(2)
    },
  })
);

export const MainGrid: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};

export const HeaderTitle: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper square className={classes.titlePaper}>
          <Typography>{children}</Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

type TitleActionProps = {
  href: string;
  label: string;
  disabled?: boolean;
};

export const TitleAction: React.FunctionComponent<{}> = ({
  children,
  ...props
}) => {
  const classes = useStyles();

  const { href, label, disabled } = props as TitleActionProps;
  return (
    <Button
      href={href}
      className={classes.actions}
      disabled={disabled}
      size="large"
      variant="outlined"
      color="default"
    >
      {label}
    </Button>
  );
};

export const InfoGrid: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Grid item xs={12} md={6} container direction="column">
      {children}
    </Grid>
  );
};

export const InfoPaper: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper square className={classes.paper}>
        {children}
      </Paper>
    </Grid>
  );
};

export type MyChipProps = {
  label: string;
};

export const MyChip: React.FunctionComponent<{}> = ({ ...props }) => {
  const classes = useStyles();
  const { label } = props as MyChipProps;
  return (
    <Chip
      className={classes.chip}
      label={label}
      icon={
          <DoneIcon classes={{root:classes.chipIcon}}/>
      }
    />
  );
};

export const PanelGrid: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <Grid item xs={12} md={6}>
      <div>{children}</div>
    </Grid>
  );
};

export type MyPanelProps = {
  id: string;
  heading: string;
  secondaryHeading: string;
  expanded: string | boolean;
  onChange: (panelId: string, isExpanded: boolean) => void;
};

export const Panel: React.FunctionComponent<{}> = ({ children, ...props }) => {
  const classes = useStyles();
  const { id, heading, secondaryHeading, expanded, onChange } = props as MyPanelProps;
  
  return (
    <ExpansionPanel 
    expanded={expanded === id } 
    square 
    onChange={(_e, isExpanded) => {
      onChange(id, isExpanded)}}
    className={classes.panelRoot} >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}bh-content`}
        id={id}
      >
        <Typography className={classes.heading}>{heading}</Typography>
        <Typography className={classes.secondaryHeading}>
          {secondaryHeading}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <Typography>{children}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export const ImageCard: React.FunctionComponent<{}> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      classes={{
        root: classes.images
      }}
      {...props}
    />
  );
};

export const HyperLink: React.FunctionComponent<{}> = ({ ...props }) => {
  return (
    <Link
    color="inherit"
    underline="always"
      {...props}
    />
  );
};
