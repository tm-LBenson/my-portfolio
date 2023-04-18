import About from '@src/components/About';
import ContactForm from '@src/components/Contact';
import Hero from '@src/components/Hero';
import Layout from '@src/components/Layout';
import Projects from '@src/components/Projects';
import TechnicalSkills from '@src/components/Skills';
import Script from 'next/script';
import prism from '../../public/prism';
function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      <ContactForm />
      <Script src={prism} />
    </Layout>
  );
}

export default HomePage;
