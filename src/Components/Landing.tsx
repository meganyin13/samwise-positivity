import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Landing.module.css';

<<<<<<< HEAD
export const Landing = (): React.ReactElement => (
  <div className={styles.Landing}>
    <NavBar />
    <div>
      <h1 className={styles.Title}>
        #SpreadThe
        <span className={styles.Love}>Love</span>
      </h1>
      <p className={styles.SubText}>
=======
export const Landing = () => (
    <div className={styles.Landing}>
      <NavBar />
      <div>
        <h1 className={styles.Title}>
          #SpreadThe
          <span className={styles.Love}>Love</span>
        </h1>
        <p className={styles.SubText}>
>>>>>>> 2065a205f68a779aa86bd07bc4473a57f3c0193d
        Week of June 20, 2020
      </p>
      <p className={styles.SubText}>
        Happy mid-June. Whether you're stuck at home or your town is reopening, here are some
        positive headlines and fun activities guaranteed to get you through your day!
      </p>
    </div>
<<<<<<< HEAD
  </div>
);

export const NavBar = () => (
  <div className={styles.LogoBar}>
    <h1 className={styles.NavBarTitle}>
      <a href="/">
        #SpreadThe
        <span className={styles.Love}>Love</span>
      </a>
      <Link to="/subscribe">
        <span className={styles.NavBarSubscribe}><a href="/">Subscribe</a></span>
      </Link>
      <Link to="/Blog">
        <span className={styles.NavBarItems}><a href="/">Blog</a></span>
      </Link>
      <Link to="/">
        <span className={styles.NavBarItems}><a href="/">Home</a></span>
      </Link>
    </h1>
  </div>
);
=======
  );

export const NavBar = () => (
    <div className={styles.LogoBar}>
        <h1 className={styles.NavBarTitle}>
          <a href='/'>#SpreadThe
          <span className={styles.Love}>Love</span>
          </a>
          <Link to='/subscribe'>
            <span className={styles.NavBarSubscribe}>
              <a href='/'>Subscribe</a>
            </span>
          </Link>
          <Link to='/'>
            <span className={styles.NavBarItems}>
              <a href='/'>Home</a>
            </span>
          </Link>
        </h1>
     </div>
  );
>>>>>>> 2065a205f68a779aa86bd07bc4473a57f3c0193d
