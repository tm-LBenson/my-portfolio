import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { formatISO } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const markdownProcessor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify);

    const contentHtml = markdownProcessor
      .processSync(matterResult.content)
      .toString();

    return {
      id,
      contentHtml,
      ...matterResult.data,
      date: matterResult.data.date.toISOString(),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);

  const contentHtml = markdownProcessor
    .processSync(matterResult.content)
    .toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
    date: matterResult.data.date.toISOString(),
  };
}
