import About from '@src/components/About';
import Hero from '@src/components/Hero';
import Layout from '@src/components/Layout';
import Projects from '@src/components/Projects';
import TechnicalSkills from '@src/components/Skills';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
    </Layout>
  );
}

export default HomePage;
