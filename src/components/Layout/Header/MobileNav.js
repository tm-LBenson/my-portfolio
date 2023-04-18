import { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { smoothScroll } from '@src/components/smoothScroll';
import links from '@src/components/links';
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const drawer = document.querySelector('.mobile-nav');
      const closeButton = document.querySelector('.hamburger-react');

      if (
        !drawer.contains(e.target) &&
        !closeButton.contains(e.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
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
          {links.map((link, index) => (
            <li
              key={index}
              className="nav-item"
            >
              <a
                href={link.href}
                className={link.cta ? 'cta-button nav-link' : 'nav-link'}
                onClick={(e) => {
                  toggleMenu(e);
                  smoothScroll(e);
                }}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
