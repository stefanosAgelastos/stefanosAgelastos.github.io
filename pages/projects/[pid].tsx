import React from "react";
import ProjectMarkdown from "../../src/ProjectMarkdown";
import {
  getREADMEfromMyGithub,
  getProjectImageUrl
} from "../../util/projectData";
import { NextPageContext } from "next";
import { Collapse } from '@material-ui/core';

type Props = {
  markdown: string;
  imageUrl: string;
};

type IState = {
  zoom: boolean;
}

class ProjectPage extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      zoom: false
    };
  }

  static async getInitialProps({ query }: NextPageContext) {
    const markdown = await getREADMEfromMyGithub(query.pid as string);
    const imageUrl = getProjectImageUrl(query.pid as string);
    return { markdown, imageUrl };
  }

  componentDidMount() {
    this.setState({ zoom: true });
  }

  componentWillMount() {
    this.setState({ zoom: false });
  }

  render() {
    return (
      <Collapse in={this.state.zoom} timeout={500}>
        <ProjectMarkdown
          projectMD={this.props.markdown}
          titleBackroundImage={this.props.imageUrl}
        /> 
      </Collapse>
    );
  }
}

export default ProjectPage;
