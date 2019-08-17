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
  PanelSummary,
  PanelContent
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

export default function CenteredGrid() {
  const classes = useStyles();

  const options: MarkdownOptions = {
    overrides: {
      /* img: { component: CardMedia, props: { component: "img" } }, */
      MainGrid: MainGrid,
      HeaderTitle: HeaderTitle,
      InfoGrid: InfoGrid ,
      InfoPaper: InfoPaper ,
      PanelGrid: PanelGrid,
      Panel:  Panel,
      PanelSummary: PanelSummary,
      PanelContent: PanelContent,
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