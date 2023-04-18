import { Icon } from '@iconify/react';
import links from '@src/components/links';
import { smoothScroll } from '@src/components/smoothScroll';
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-nav">
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
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/tm-lewis-benson/">
              <Icon
                icon="mdi:linkedin"
                style={{ color: 'black' }}
                width="25"
                height="25"
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/tm-LBenson">
              <Icon
                icon="mdi:github"
                style={{ color: 'black' }}
                width="25"
                height="25"
              />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TM_LBenson">
              <Icon
                icon="icon-park-solid:twitter"
                style={{ color: 'black' }}
                width="25"
                height="25"
              />
              Twitter
            </a>
          </li>
        </ul>
        <div className="credit">Designed and Built by Lewis Benson</div>
      </div>
    </footer>
  );
}

export default Footer;
