import React from 'react';
import SamwiseLogo from './imgs/samwise-logo.png';
import HeartGraphic from './imgs/heart-graphic.png';
import styles from './Landing.module.css';

export default (): React.ReactElement => {
  const scrollDown = (): void => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <div className={styles.Landing}>
      <img src={SamwiseLogo} alt="Samwise Logo" width="30%" height="20%" />
      <h1 className={styles.Title}>
        #SpreadThe
        <span className={styles.Love}>Love</span>
      </h1>
      <p className={styles.SubText}>
        a weekly dose of good news and wellness tips for these tumultuous times.
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
  );
};
