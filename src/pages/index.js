import About from '@src/components/About';
import ContactForm from '@src/components/Contact';
import Hero from '@src/components/Hero';
import Layout from '@src/components/Layout';
import Projects from '@src/components/Projects';
import TechnicalSkills from '@src/components/Skills';
import Script from 'next/script';
import prism from '../../public/prism';
import FadeInSection from '@src/components/Layout/FadeInSection';
function HomePage() {
  return (
    <Layout>
      <Hero />
      <div id="about"></div>
      <FadeInSection>
        <About />
      </FadeInSection>
      <div id="skills"></div>
      <FadeInSection>
        <TechnicalSkills />
      </FadeInSection>
      <div id="work"></div>
      <FadeInSection>
        <Projects />
      </FadeInSection>
        <div id="contact"></div>
      <FadeInSection>
        <ContactForm />
      </FadeInSection>
      <Script src={prism} />
    </Layout>
  );
}

export default HomePage;
