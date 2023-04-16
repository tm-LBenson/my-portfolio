import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <h1>Hello, my name is</h1>
      <h2>Lewis Benson.</h2>
      <h3>I am a software developer.</h3>
      <p>
        As a software developer, I build things for the web and mobile
        applications. More than building applications, I create great digital
        experiences with a focus on accessible, and human-centered products.
      </p>
      <div className="cta-buttons">
        <a
          href="/resume"
          className="resume-button"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="contact-button"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
