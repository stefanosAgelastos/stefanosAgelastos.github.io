import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { Typography, Toolbar, Button, } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            borderBottom: `1px solid ${theme.palette.divider}`,
            [theme.breakpoints.down('sm')]: {
                width: '100% !important',
                height: 150,
            },
        },
        toolbarTitle: {
            flex: 1,
            [theme.breakpoints.down('sm')]: {
                display: "block !important"
            }
        },
        homeButton: {
            visibility: (props: HeaderProps) => props.homeButtonVisible ? 'visible' : 'hidden',
            [theme.breakpoints.down('sm')]: {
                display: "block !important"
            }
        },
        galleryButton: {
            visibility: (props: HeaderProps) => props.galleryButtonVisible ? 'visible' : 'hidden',
            [theme.breakpoints.down('sm')]: {
                display: "block !important"
            }
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
