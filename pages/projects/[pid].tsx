import React from 'react';
import { NextPage } from 'next';
import ProjectMarkdown from '../../src/ProjectMarkdown';
import { getREADMEfromMyGithub } from '../../util/projectData';

type Props = {
  markdown: string
}

const ProjectPage: NextPage<Props> = (props) => {
  return (<ProjectMarkdown projectMD={props.markdown} />)
}

ProjectPage.getInitialProps = async ({ query }) => {
  const markdown = await getREADMEfromMyGithub(query.pid as string);
  return {markdown};
}

export default ProjectPage;