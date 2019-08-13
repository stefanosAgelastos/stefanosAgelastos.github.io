import React from 'react';
import Markdown, { MarkdownOptions } from 'markdown-to-jsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardMedia from '@material-ui/core/CardMedia';
import MyPaper from './MyPaper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      marginTop: theme.spacing(1),
    },
    root: {
      marginTop: theme.spacing(8),
    },
    image: {
      width: "45%",
      position: "revert",
      right: "20",
      margin: theme.spacing(1),
      display: "inline"
    },
    code: {
      backgroundColor: 'rgba(0,0,0,.1)',
      padding: theme.spacing(1),
    }
  }));


type Props = {
  projectMD: string,
  titleBackroundImage: string
};

export default function ProjectMarkdown(props: Props) {

  const { projectMD, titleBackroundImage } = props;
  const classes = useStyles();
  const options: MarkdownOptions = {
    overrides: {
      h1: { component: props => (<MyPaper backgroundimageurl={titleBackroundImage}>
                                  <Typography color="inherit" gutterBottom variant="h3" {...props} />
        </MyPaper>)
      },
      h2: { component: props => <Typography gutterBottom variant="h5" {...props} /> },
      h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
      h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
      p: { component: props => <Typography paragraph {...props} /> },
      a: { component: Link },
      code: { component: MyPaper, props: { elevation: 0, className: classes.code } },
      img: { component: CardMedia, props: { className: classes.image, component: 'img' } },
      li: { component: ({ ...props }) => { return (<li className={classes.listItem}> <Typography component="span" {...props} /> </li>) }},
    },
  };



  return (
    <div className={classes.root}>
      <Markdown options={options}>{projectMD}</Markdown>
    </div>
  );
}