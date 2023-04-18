import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';
import Image from 'next/image';

export default function Blog({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <section>
        <h2>Blog Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title, excerpt, author, category, tags, slug }) => (
            <li key={id} className="blog-card">
              <div className="blog-card-image">
                <Image src="/blog-image.jpg" alt={title} layout="fill" objectFit="cover" />
                <Link href={`/posts/${id}`}>
                  <a>
                    <h3>{title}</h3>
                  </a>
                </Link>
              </div>
              <div className="blog-card-content">
                <p className="description">{category}</p>
                <p className="excerpt">{excerpt}</p>
              </div>
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
