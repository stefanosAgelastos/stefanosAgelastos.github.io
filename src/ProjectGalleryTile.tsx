import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import GalleryTypography from "./MyGalleryTypography";
import { Project } from "../interfaces";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tileWrapper: {
      position: "relative",
      display: "block",
      padding: theme.spacing(0),
      borderRadius: 0,
      height: "40vh",
      [theme.breakpoints.down("sm")]: {
        scrollSnapAlign: "start",
        width: "100% !important",
        height: 400
      },
      "&:hover": {
        zIndex: 1
      },
      "&:hover $tileBackdrop": {
        opacity: 0.15
      },
      "&:hover $tileMarked": {
        opacity: 0
      },
      "&:hover $tileTitle": {
        border: "4px solid currentColor"
      },
      "&:hover $tileSubtitle": {
        visibility: "visible"
      }
    },
    tileSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    tileBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create("opacity")
    },
    tileButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1)
      },
      color: theme.palette.primary.contrastText
    },
    tileTitle: {
      position: "relative",
      whiteSpace: "pre-wrap", // for displaying \n and tabs in html
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1)
      }
    },
    tileSubtitle: {
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
      visibility: "hidden",
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1)
      },
      width: "85%"
    },
    tileMarked: {
      height: 3,
      width: "65%",
      background: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "10",
      transition: theme.transitions.create("opacity")
    }
  })
);

type Props = {
  tile: Project;
};

export default function ProjectGalleryTile(props: Props) {
  const classes = useStyles();
  const { tile } = props;
  return (
    <React.Fragment>
      <Link href="/projects/[pid]" as={`/projects/${tile.slug}`} passHref>
        <ButtonBase
          className={classes.tileWrapper}
          style={{
            width: tile.width
          }}
        >
          <div
            className={classes.tileSrc}
            style={{
              backgroundColor: tile.imageUrl
              /*               backgroundImage: `url(${tile.imageUrl})`
               */
            }}
          />
          <div className={classes.tileBackdrop} />
          <div className={classes.tileButton}>
            <GalleryTypography
              component="h3"
              variant="h3"
              color="inherit"
              align={"left"}
              className={classes.tileTitle}
            >
              {tile.title}
              <div className={classes.tileMarked} />
            </GalleryTypography>
            <GalleryTypography
              component="p"
              variant="subtitle1"
              className={classes.tileSubtitle}
              color="inherit"
            >
              {tile.subtitle}
            </GalleryTypography>
          </div>
        </ButtonBase>
      </Link>
    </React.Fragment>
  );
}
