import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ControlledExpansionPanels from '../src/MyExpansionPanels';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing(1),
      },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Header title</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <ControlledExpansionPanels/>
        </Grid>
        <Grid item xs={12} md={6} container direction="column">
            <Grid >
               <Paper className={classes.paper}>Quick info</Paper>
            </Grid>
            <Grid >
               <Paper className={classes.paper}>Tags aimed to recruiters
               <Chip className={classes.chip} label="Full-Stack development" />
               <Chip className={classes.chip} label="Node.js" />
               <Chip className={classes.chip} label="Html" />
               <Chip className={classes.chip} label="Full-Stack development" />
               </Paper>

            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}