// DesktopNav.js

import links from '@src/components/links';
import { smoothScroll } from '@src/components/smoothScroll';

function DesktopNav() {
  return (
    <div className="nav">
      <ul className="nav-links">
        {links.map((link, index) => (
          <li
            key={index}
            className="nav-item"
          >
            <a
              href={link.href}
              className={link.cta ? 'cta-button nav-link' : 'nav-link'}
              onClick={smoothScroll}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNav;
