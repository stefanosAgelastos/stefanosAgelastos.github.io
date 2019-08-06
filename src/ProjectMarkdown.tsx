import React from 'react';
import Markdown, { MarkdownOptions } from 'markdown-to-jsx';
 import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      marginTop: theme.spacing(1),
    },
  }));

const options: MarkdownOptions = {
  overrides: {
    h1: { component: props => <Typography gutterBottom variant="h4" {...props} /> },
    h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
    h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
    p: { component: props => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      component: ({ ...props }) => {
        const classes = useStyles();
        return (
          <li className={classes.listItem}>
            <Typography component="span" {...props} />
          </li>
        )
      },
    },
  },
};

type Props = {
  projectMD: string
};

export default function ProjectMarkdown(props: Props) {
  console.log(props.projectMD);
  return (<Markdown options={options}>{props.projectMD}</Markdown>);
}