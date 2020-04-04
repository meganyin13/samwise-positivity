import React from 'react';
import Landing from './Landing';
import EmailBox from './EmailBox';
import styles from './App.module.css';

export default (): React.ReactElement => (
  <div className={styles.App}>
    <Landing />
    <EmailBox />
  </div>
);
