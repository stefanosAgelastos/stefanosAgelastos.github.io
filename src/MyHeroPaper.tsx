import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
        position: 'relative',
        backgroundColor: theme.palette.primary.light,
        opacity: 0.95,
        color: theme.palette.common.white,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
/*         backgroundColor: 'rgba(0,0,0,.3)',
 */    },
    childrenWrapper: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        }
    }
}));

type MyPaperProps = {
    backgroundimageurl?: string,
    children?: React.ReactNode;
}

export default function Mypaper(props: MyPaperProps) {
    
    const classes = useStyles(props);
    
    return (
    <Paper className={classes.root}>
        {/* ? Increase the priority of the hero background image */}
        
        <div className={classes.overlay} />
        <Grid container>
            <Grid item md={6}>
                <div className={classes.childrenWrapper}>
                    {props.children}
                </div>
            </Grid>
        </Grid>
    </Paper>
    );
}

/*
{
    <img
    style={{ display: 'none' }}
    src={props.backgroundimageurl}
    alt="background"
    />
} */