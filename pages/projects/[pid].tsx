import React from 'react';
import ProjectMarkdown from '../../src/ProjectMarkdown';
import post1 from '../../src/blog-post.1.md';

const Post = () => {
/*   const router = useRouter();
  const { pid } = router.query; */

  return <ProjectMarkdown projectMD={post1 as string}  />;
};

export default Post;