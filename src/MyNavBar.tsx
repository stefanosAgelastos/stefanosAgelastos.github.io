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
            visibility: (props: HeaderProps) => props.homeButtonVisible ? 'visible' : 'hidden'
        },
        galleryButton: {
            visibility: (props: HeaderProps) => props.galleryButtonVisible ? 'visible' : 'hidden'
        }
    }),
);

type HeaderProps = {
    homeButtonVisible: boolean | undefined,
    galleryButtonVisible: boolean | undefined
}

export default function Header(props: HeaderProps) {
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
                    Browse my Projects  </Button>
            </Link>
        </Toolbar>
    );
}
