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
};

class ProjectPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static async getInitialProps({ query }: NextPageContext) {
    const markdown = await getREADMEfromMyGithub(query.pid as string);
    const imageUrl = getProjectImageUrl(query.pid as string);
    return { markdown, imageUrl };
  }

  render() {
    return (
      <React.Fragment>
                        <SimpleSnackbar/>
        <MarkdownLayout
          projectMD={this.props.markdown}
          backroundImage={this.props.imageUrl}
        />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
