import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            backgroundColor: theme.palette.background.default,
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

export const MyPaper: React.FC<{}> = ({ children }) => {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root}>
            {/* ? Increase the priority of the hero background image */}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={4}>
                    <div className={classes.childrenWrapper}>
                        {children}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
