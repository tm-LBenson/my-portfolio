import Layout from '@src/components/Layout';
import Head from 'next/head';
import React from 'react';

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <h2>My Resume</h2>
      <div className="resume">
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            It appears your browser does not support PDFs. Please{' '}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              download my resume
            </a>{' '}
            to view it.
          </p>
        </object>
      </div>
    </Layout>
  );
}
