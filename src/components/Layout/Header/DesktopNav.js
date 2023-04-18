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
            <Link
              href={link.href}
              className={link.cta ? 'cta-button nav-link' : 'nav-link'}
              onClick={(e) => smoothScroll(e, router)}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNav;
