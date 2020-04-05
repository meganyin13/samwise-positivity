import React from 'react';
import logoHeart from './imgs/heart_logo.svg';
import logoLink from './imgs/link_logo.svg';
import styles from './Footer.module.css';

export default (): React.ReactElement => (
  <footer className={styles.Footer}>
    <p>
      Made by DTI
      {' '}
      <img src={logoHeart} alt="with love" />
    </p>
    <p>
      <a href="https://cornelldti.org">
        Cornell Design &amp; Tech Initiative
        {' '}
        <img src={logoLink} alt="external link" />
      </a>
    </p>
  </footer>
);
