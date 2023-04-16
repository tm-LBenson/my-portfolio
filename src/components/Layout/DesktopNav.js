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
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={link.cta ? 'cta-button' : ''}
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
