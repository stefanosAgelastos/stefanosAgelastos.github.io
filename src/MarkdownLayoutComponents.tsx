import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardMedia from "@material-ui/core/CardMedia";
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
      color: theme.palette.text.secondary,
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
    },
    images: {
      marginTop: theme.spacing(2)
    }
  })
);

/* Separate styles for the HeaderTitle component,
*  because styling rules require the props
*/
const useTitleStyles = makeStyles((theme: Theme) =>
  createStyles({
    titlePaper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundImage: (props: MyHeaderTitleProps) => `url(${props.backgroundimageurl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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

export type MyHeaderTitleProps = {
  backgroundimageurl: string;
};

export const HeaderTitle: React.FunctionComponent<{} & MyHeaderTitleProps> = ({ children, ...props }) => {
  const classes = useTitleStyles(props);
  return (
    <Grid item xs={12}>
      <Paper className={classes.titlePaper} >
        <Typography>{ children }</Typography>
      </Paper>
    </Grid>
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
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

export type MyChipProps = {
  label: string;
};

export const MyChip: React.FunctionComponent<{} & MyChipProps> = ({ children, ...props }) => {
  const classes = useStyles();
  const { label } = props;
  return (
    <Chip className={classes.chip} label={label}>
      {" "}
      {children}{" "}
    </Chip>
  );
};

export const PanelGrid: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <div className={classes.panelRoot}>{children}</div>
    </Grid>
  );
};

export type MyPanelProps = {
  id: string;
  heading: string;
  secondaryHeading: string;
};

export const Panel: React.FunctionComponent<{}> = ({ children, ...props }) => {
  const classes = useStyles();
  const { id, heading, secondaryHeading } = props as MyPanelProps;
  return (
    <ExpansionPanel>
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
      <ExpansionPanelDetails>
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
