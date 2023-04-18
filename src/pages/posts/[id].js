// pages/posts/[id].js
import { useRouter } from 'next/router';
import { getPostData, getAllPostIds } from '../../../lib/posts';
import Layout from '@src/components/Layout';
import Image from 'next/image';
import Script from 'next/script';
import prism from '../prism';
export default function Post({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Script src={prism} />
      <section className={'blog-section'}>
        <article className={'blog-post'}>
          {/* <Image
          src={postData.imageSrc}
          alt={postData.title}
        /> */}
          <div className={'blog-details'}>
            <h1>{postData.title}</h1>
            <div
              className={'blog-content'}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </div>
        </article>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
    revalidate: 1,
  };
}
