import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProjectGalleryTypography from './ProjectGalleryTypography';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tileWrapper: {
            position: 'relative',
            display: 'block',
            padding: 0,
            borderRadius: 0,
            height: '40vh',
            [theme.breakpoints.down('sm')]: {
                width: '100% !important',
                height: 100,
            },
            '&:hover': {
                zIndex: 1,
            },
            '&:hover $tileBackdrop': {
                opacity: 0.15,
            },
            '&:hover $tileMarked': {
                opacity: 0,
            },
            '&:hover $tileTitle': {
                border: '4px solid currentColor',
            },
        },
        tileButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        tileSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        tileBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: theme.palette.common.black,
            opacity: 0.5,
            transition: theme.transitions.create('opacity'),
        },
        tileTitle: {
            position: 'relative',
            padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
        },
        tileMarked: {
            height: 3,
            width: 18,
            background: theme.palette.common.white,
            position: 'absolute',
            bottom: -2,
            left: 'calc(50% - 9px)',
            transition: theme.transitions.create('opacity'),
        },
    }));

type Props = {
    tile: {
        title: string,
        width: string | number | undefined,
        url: string,
    },
    slug: string
};

/* const linkElement = (slug: string) => {
    const linkprops = {
        href: "/post/[slug]",
        as: `/post/${slug}`,
        passHref: true
    }
    return new Link(linkrops);
} */

export default function ProjectGalleryTile(props: Props) {
    const classes = useStyles();
    const { tile } = props;
    return (
        <React.Fragment>
            <Link href="/projects/[pid]" as={`/projects/${props.slug}`} passHref>
                <ButtonBase
                    className={classes.tileWrapper}
                    style={{
                        width: tile.width,
                    }}
                >
                    <div
                        className={classes.tileSrc}
                        style={{
                            backgroundImage: `url(${tile.url})`,
                        }}
                    />
                    <div className={classes.tileBackdrop} />
                    <div className={classes.tileButton}>
                        <ProjectGalleryTypography
                            component="h3"
                            variant="h6"
                            color="inherit"
                            className={classes.tileTitle}
                        >
                            {tile.title}
                            <div className={classes.tileMarked} />
                        </ProjectGalleryTypography>
                    </div>
                </ButtonBase>
            </Link>
        </React.Fragment>
    );
}