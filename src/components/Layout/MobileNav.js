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
        toggled={isOpen}
        toggle={toggleMenu}
      />
      {isOpen && (
        <nav className="mobile-nav">
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
        </nav>
      )}
    </>
  );
}

export default MobileNav;
