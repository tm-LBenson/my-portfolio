// DesktopNav.js
import React from 'react';

function DesktopNav() {
  const links = [
    { href: '#about', text: 'About Me' },
    { href: '#skills', text: 'Skills' },
    { href: '#work', text: 'Work' },
    { href: '#contact', text: 'Contact' },
    { href: '/resume', text: 'Resume', cta: true },
    { href: '/blog', text: 'Blog' },
  ];

  return (
    <nav className="nav">
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            className="nav-item"
          >
            <a
              href={link.href}
              className={link.cta ? 'cta-button nav-link' : 'nav-link'}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;
