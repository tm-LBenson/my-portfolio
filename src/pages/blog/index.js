import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';
import Image from 'next/image';
import Layout from '@src/components/Layout';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <section className="blog-section">
        <h2>Blog Posts</h2>
        <ul className="blog-card__wrapper">
          {allPostsData.map(
            ({ id, date, title, excerpt, author, category, tags, slug }) => (
              <li
                key={id}
                className="blog-card"
              >
                <div className="blog-card-image">
                  <div className="gradient-overlay"></div>
                  <Link href={`/posts/${id}`}>
                    <Image
                      src={`/splash/${new Date(date).getDate()}.jpg`}
                      alt={title}
                      fill
                    />
                    <h3>{title}</h3>
                  </Link>
                </div>
                <div className="blog-card-content">
                  <p className="description">{category}</p>
                  <p className="excerpt">{excerpt}</p>
                </div>
                <ul className="blog-tags">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      </section>
    </Layout>
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
