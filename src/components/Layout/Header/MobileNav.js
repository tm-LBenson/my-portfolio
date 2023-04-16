import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger
        className="hamburger"
        toggled={isOpen}
        toggle={toggleMenu}
      />
      <div className={`mobile-nav${isOpen ? ' open' : ''}`}>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/resume"
              className="cta-button"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
