import React from "react";
import {
  getREADMEfromMyGithub,
  getProjectImageUrl
} from "../../util/projectData";
import { NextPageContext } from "next";
import MarkdownLayout from "../../src/MyMarkdownLayout";
import SimpleSnackbar from "../../src/MySnack";

type Props = {
  markdown: string;
  imageUrl: string;
  snack: boolean;
};

class ProjectPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static async getInitialProps({ query }: NextPageContext) {
    const markdown = await getREADMEfromMyGithub(query.pid as string);
    const imageUrl = getProjectImageUrl(query.pid as string);
    var snack = true;
    if(query.pid == "ar-tour-guide" || query.pid == "chat-webapp-node-js" || query.pid == "next-js-homepage"){
      snack = false;
    }
    return { markdown, imageUrl, snack };
  }

  render() {
    return (
      <React.Fragment>
        { this.props.snack &&
          <SimpleSnackbar />
          }
        <MarkdownLayout
          projectMD={this.props.markdown}
          backroundImage={this.props.imageUrl}
        />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
