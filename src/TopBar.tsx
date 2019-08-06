import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { Typography, Toolbar, Button, } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbarTitle: {
            flex: 1,
        },
        homeButton: {
            visibility: (props: TopBarProps) => props.homeButtonVisible ? 'visible' : 'hidden'
        },
        galleryButton: {
            visibility: (props: TopBarProps) => props.galleryButtonVisible ? 'visible' : 'hidden'
        }
    }),
);

type TopBarProps = {
    homeButtonVisible: boolean | undefined,
    galleryButtonVisible: boolean | undefined
}

export default function TopBar(props: TopBarProps) {
    const classes = useStyles(props);
    return (
        <Toolbar className={classes.toolbar}>
            <Link href="/" >
                <Button size="small" className={classes.homeButton}>
                    Back to home
            </Button>
            </Link>
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
            <Link href="/projects" passHref>
                <Button variant="outlined" size="small" className={classes.galleryButton}>
                    Browse Projects  </Button>
            </Link>
        </Toolbar>
    );
}
