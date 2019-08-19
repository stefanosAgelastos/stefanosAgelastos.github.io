import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  MyChip,
  InfoPaper,
  HeaderTitle,
  InfoGrid,
  PanelGrid,
  MainGrid,
  Panel,
  ImageCard,
} from "../src/MarkdownLayoutComponents";
import test from "../static/test.md";
import Markdown, { MarkdownOptions } from "markdown-to-jsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    chip: {
      margin: theme.spacing(1)
    }
  })
);

type Props = {
  projectMD: string,
  titleBackroundImage: string
};

export default function CenteredGrid(props: Props) {
  const classes = useStyles();
  const { /* projectMD, titleBackroundImage */ } = props;

  const options: MarkdownOptions = {
    overrides: {
      img: ImageCard,
      MainGrid: MainGrid,
      HeaderTitle: {
        component: HeaderTitle,
        props: { backgroundimageurl: "https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?auto=format&fit=crop&w=400&q=80"}
      },
      InfoGrid: InfoGrid ,
      InfoPaper: InfoPaper ,
      PanelGrid: PanelGrid,
      Panel:  Panel,
      MyChip: MyChip,
    }
  };

  return (
    <div className={classes.root}>
      <Markdown options={options} children={test} />
    </div>
  );
}

{/* <ControlledExpansionPanels />
 */}