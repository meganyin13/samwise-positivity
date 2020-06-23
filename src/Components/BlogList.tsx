import React from 'react';
import styles from '../css/BlogList.module.css';

type props = {
  title: string,
  date: string
  img: string
}

export default ({ title, date, img }: props): React.ReactElement => (
  <div className={styles.Post}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.date}>{date}</h2>
    <img className={styles.snap} src={img} alt="Newsletter snapshot" />
  </div>
);
