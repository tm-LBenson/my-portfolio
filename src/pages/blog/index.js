// pages/blog.js
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <section>
        <h2>Blog Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {new Date(date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
