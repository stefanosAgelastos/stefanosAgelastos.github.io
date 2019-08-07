import React from 'react';
import { NextPage } from 'next';
import ProjectMarkdown from '../../src/ProjectMarkdown';
import { Project } from '../../interfaces';
import { findData } from '../../util/projectData';


type Props = {
  item: Project
}

const ProjectPage: NextPage<Props> = ({ item }) => (<ProjectMarkdown projectMD={item.contentMarkdown} />)

ProjectPage.getInitialProps = async  ({ query }) => {
  const item: Project = findData(query.pid as string);
  return { item }
}

export default ProjectPage;