import React from 'react';
import { NextPage } from 'next';
import ProjectMarkdown from '../../src/ProjectMarkdown';
import { getREADMEfromMyGithub, getProjectImageUrl } from '../../util/projectData';

type Props = {
  markdown: string,
  imageUrl: string
}

const ProjectPage: NextPage<Props> = (props) => {
  return (<ProjectMarkdown projectMD={props.markdown} titleBackroundImage={props.imageUrl} />)
}

ProjectPage.getInitialProps = async ({ query }) => {
  const markdown = await getREADMEfromMyGithub(query.pid as string);
  const imageUrl = getProjectImageUrl(query.pid as string);
  return {markdown, imageUrl};
}

export default ProjectPage;