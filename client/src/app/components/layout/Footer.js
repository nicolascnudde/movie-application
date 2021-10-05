import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import styles from './Footer.module.scss';
import layout from '../../layouts/BaseLayout.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={layout.wrapper}>
        <p>© 2021 Nicolas Cnudde</p>

        <div className={styles.socials}>
          <ul className={styles.socialsList}>
            <li className={styles.socialsListItem}>
              <a href="https://github.com/pgm-nicolascnudde" target="_blank_" rel="noreferrer">
                <FaGithubSquare />
              </a>
            </li>

            <li className={styles.socialsListItem}>
              <a href="https://www.linkedin.com/in/nicolascnudde" target="_blank_" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>

            <li className={styles.socialsListItem}>
              <a href="https://www.twitter.com/thatnicolas" target="_blank_" rel="noreferrer">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;