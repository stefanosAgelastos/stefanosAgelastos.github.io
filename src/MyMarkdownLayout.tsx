import React, { CSSProperties } from "react";
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
} from "./MarkdownLayoutComponents";
import Markdown, { MarkdownOptions } from "markdown-to-jsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: (props: Props) => ({
        backgroundImage: `url(${props.backroundImage as string})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      } as CSSProperties),
    },
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
  backroundImage: string
};

export default function MarkdownLayout(props: Props) {
  const classes = useStyles(props);
  const { projectMD, backroundImage } = props;

  const options: MarkdownOptions = {
    overrides: {
      img: ImageCard,
      MainGrid: MainGrid,
      HeaderTitle: {
        component: HeaderTitle,
        props: { backgroundimageurl: backroundImage }
      },
      InfoGrid: InfoGrid,
      InfoPaper: InfoPaper,
      PanelGrid: PanelGrid,
      Panel: Panel,
      MyChip: MyChip,
    }
  };

  return (
    <div className={classes.root}>
      <Markdown options={options} children={projectMD} />
    </div>
  );
}

{/* <ControlledExpansionPanels />
 */}