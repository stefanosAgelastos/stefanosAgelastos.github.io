import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  MyChip,
  InfoPaper,
  InfoGrid,
  PanelGrid,
  MainGrid,
  Panel,
  HeaderTitle,
  ImageCard,
  TitleAction,
} from "./MarkdownLayoutComponents";
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
  backroundImage: string
};

export default function MarkdownLayout(props: Props) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { projectMD } = props;

  const handleChange = (panelID: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panelID : false);
  };

  const options: MarkdownOptions = {
    overrides: {
      img: ImageCard,
      MainGrid: MainGrid,
      HeaderTitle: HeaderTitle,
      TitleAction: TitleAction,
      InfoGrid: InfoGrid,
      InfoPaper: InfoPaper,
      PanelGrid: {
        component: PanelGrid, props: {
          expanded: expanded,
          handleSelect: handleChange
        }
      },
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