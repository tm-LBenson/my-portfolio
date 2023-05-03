import { Icon } from '@iconify/react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <div>
      <h2 className="about-heading">
        <span>Reach out!</span>
        <hr className="about-divider" />
      </h2>
      <p>
        If you have any questions or would like to get in touch, please feel
        free to contact me using the form below or reach out to me through my
        social media channels.
      </p>

      <h3>Social</h3>
      <ul className="links">
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
      <ContactForm />
    </div>
  );
}
