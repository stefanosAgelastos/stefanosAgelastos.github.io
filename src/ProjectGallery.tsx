import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import slugify from 'slugify';
import ProjectGalleryTile from './ProjectGalleryTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tiles: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap',
    }
  }));

export default function ProjectGallery() {
  const classes = useStyles();

  const projects = [
    {
      url:
        'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
      title: 'Chat: Node.js, Socket.io, jQuery and many other amazing techonologies',
      width: '40%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
      title: 'Massage',
      width: '20%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
      title: 'Hiking',
      width: '40%',
    },
  ];

  return (
    <React.Fragment>
      <div className={classes.tiles}>
        {projects.map(project => {
          const slug: string = slugify(project.title, { lower: true });
          console.log(slug);
          return (
              <ProjectGalleryTile slug={slug} tile={project} key={slug} />
          );
        }
        )}
      </div>
    </React.Fragment>
  );
}