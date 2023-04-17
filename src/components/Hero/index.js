import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedArrow from './AnimatedArrow';

function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - 50;

    // Smooth scroll to the target element
    animateScrollTo(targetPosition);
  };

  const animateScrollTo = (position) => {
    const duration = 500; // duration of the animation in milliseconds
    const start = window.pageYOffset;
    const distance = position - start;
    let startTime = null;

    const animationStep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easeInOut = easeInOutQuad(progress, start, distance, duration);
      window.scrollTo(0, easeInOut);
      if (progress < duration) window.requestAnimationFrame(animationStep);
    };

    window.requestAnimationFrame(animationStep);
  };

  // Easing function for smooth animation
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <section className="hero">
      <div className="hero__content">
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
            onClick={handleSmoothScroll}
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        onClick={handleSmoothScroll}
      >
        <motion.div
          animate={{ opacity: scrollPosition === 0 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedArrow />
        </motion.div>
      </a>
    </section>
  );
}

export default Hero;
