// DesktopNav.js
import { useRouter } from 'next/router';
import links from '@src/components/links';
import { smoothScroll } from '@src/components/smoothScroll';
import Link from 'next/link';

function DesktopNav() {
  const router = useRouter();
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
              onClick={(e) => smoothScroll(e, router)}
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
