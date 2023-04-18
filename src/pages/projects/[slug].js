// pages/projects/[slug].js
import { Icon } from '@iconify/react';
import Layout from '@src/components/Layout';

import projects from '@src/components/Projects/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CaseStudy = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <>
      <Layout >
      <div className="case-study">
        <h1>{project.title}</h1>
        <div className="case-study__image">
          <Image
            fill={true}
            src={project.image}
            alt={project.title}
          />
        </div>
        {project.video && (
          <video
            width="100%"
            height="auto"
            controls
          >
            <source
              src={project.video}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        <h2>What I learned</h2>
        <p>{project.whatILearned}</p>
        <h2>Why I built it</h2>
        <p>{project.whyIBuiltIt}</p>
        <h2>What problem does it solve</h2>
        <p>{project.problemItSolves}</p>
        {project.collaborators && (
          <>
            <h2>Collaborators</h2>
            <ul>
              {project.collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator}</li>
              ))}
            </ul>
          </>
        )}

        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              width={'35px'}
              className="icon"
              icon="mdi:github"
              onClick={(e) => handleViewCodeClick(e, project.githubUrl)}
            />
            View on GitHub
          </a>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              width={'35px'}
              className="icon"
              icon="octicon:link-external-16"
              onClick={(e) => handleViewWebsiteClick(e, project.websiteUrl)}
            />
            Live Preview
          </a>
        </div>
        <Link
          className="back-to-home"
          href="/#work"
        >
          <Icon
            width={'40px'}
            icon="mdi:arrow-back"
          />
          Back to Homepage
        </Link>
      </div>
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: true };
}

export default CaseStudy;
