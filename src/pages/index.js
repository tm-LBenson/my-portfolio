import About from '@src/components/About';
import ContactForm from '@src/components/Contact';
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
      <ContactForm />
    </Layout>
  );
}

export default HomePage;
