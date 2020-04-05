import React from 'react';
import Landing from './Landing';
import styles from './App.module.css';
import SignUp from './SignUp';
import Footer from './Footer';

export default (): React.ReactElement => (
  <div className={styles.App}>
    <Landing />
    <SignUp />
    <Footer />
  </div>
);
