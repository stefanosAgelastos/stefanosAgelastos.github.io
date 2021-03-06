import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Project } from "../interfaces";
import { dataArray } from "../util/projectData";
import ProjectGalleryTile from "./ProjectGalleryTile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tiles: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexWrap: "wrap",
      scrollSnapType: "y mandatory",
      [theme.breakpoints.down("sm")]: { //TODO: trying to do scroll snap, is it working now?
        overflow: "scroll", 
        "@global": {
          html: {
            overflow: "hidden"
          },
          body: {
            overflow: "hidden"
          }
        }
      }
    }
  })
);

export default function ProjectGallery() {
  const classes = useStyles();

  const projects: Project[] = dataArray;

  return (
    <React.Fragment>
      <div className={classes.tiles}>
        {projects.map(project => {
          return <ProjectGalleryTile tile={project} key={project.slug} />;
        })}
      </div>
    </React.Fragment>
  );
}
