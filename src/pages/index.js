import About from '@src/components/About';
import Hero from '@src/components/Hero';
import Layout from '@src/components/Layout';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default HomePage;
