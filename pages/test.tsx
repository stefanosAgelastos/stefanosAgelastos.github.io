import React from "react";
import MarkdownLayout from "../src/MyMarkdownLayout";
import test from '../static/test.md';

type Props = {
  markdown: string;
  imageUrl: string;
};

class ProjectPage extends React.Component<Props> {


  render() {
    return (
        <MarkdownLayout
          projectMD={test}
          backroundImage={""}
        /> 
    );
  }
}

export default ProjectPage;
