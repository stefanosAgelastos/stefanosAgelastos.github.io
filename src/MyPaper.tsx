import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
  createStyles({
    root: {

    }
  }));

export default function ProjectGallery() {
  const classes = useStyles();


  return (
    <div className={classes.root}>

    </div>
  );
}