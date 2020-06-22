import React from 'react';
import BlogList from './BlogList';
import { NavBar } from './Landing';
import styles from '../css/Blog.module.css';
import Bear from '../imgs/samwise-bear.png';


export default (): React.ReactElement => (
  <div className={styles.Blog}>
    <NavBar />
    <div className={styles.heading}>Past Issues</div>
    <div className={styles.List}>
      <BlogList
        key="key1"
        title="💌 Here for you"
        date="Week of June 22"
        img={Bear}
      />
    </div>
    <div className={styles.List}>
      <BlogList
        key="key2"
        title="💌 Here for you"
        date="Week of June 22"
        img={Bear}
      />
    </div>
  </div>

);
