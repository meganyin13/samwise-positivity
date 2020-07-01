import React from 'react';
import styles from '../css/BlogList.module.css';

type props = {
  title: string,
  date: string
  element: React.ReactElement
}

export default ({ title, date, element }: props): React.ReactElement => (
  <div className={styles.Post}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.date}>{date}</h2>
    <div className={styles.snap}>{element}</div>
  </div>
);
