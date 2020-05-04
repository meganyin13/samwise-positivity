import React from 'react';
import { animateScroll } from 'react-scroll';
import SamwiseLogo from './imgs/samwise-logo.svg';
import HeartGraphic from './imgs/heart-graphic.svg';
import styles from './Landing.module.css';

export default (): React.ReactElement => {
  const scrollDown = (): void => {
    animateScroll.scrollTo(document.documentElement.clientHeight, {
      delay: 100,
      duration: 400,
      smooth: true,
    });
  };

  return (
    <div className={styles.Landing}>
      <div className={styles.LogoBar}>
      <a href="https://www.samwise.today" target="_blank">
        <img className={styles.Logo} src={SamwiseLogo} alt="Samwise Logo" height="10%" />
      </a>
      </div>
      <div>
        <h1 className={styles.Title}>
          #SpreadThe
          <span className={styles.Love}>Love</span>
        </h1>
        <p className={styles.SubText}>
          a weekly dose of good news, inspiring stories, and wellness tips that aims to spread positivity during these times of uncertainty.
        </p>
        <button
          type="submit"
          onClick={scrollDown}
          className={styles.Button}
        >
          Learn More
        </button>
        <img src={HeartGraphic} alt="Heart Graphic" className={styles.HeartGraphic} />
      </div>
    </div>
  );
};
