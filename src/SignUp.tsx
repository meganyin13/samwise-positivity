import React from 'react';
import { ReactComponent as BEARRRR } from './imgs/BEARRRR.svg';
import Phone from './imgs/phone.png';
import EmailBox from './EmailBox';
import styles from './SignUp.module.css';

export default (): React.ReactElement => (
  <div className={styles.SignUp}>
    <div className={styles.Left}>
      <p className={styles.Blurb}>
        Sign up to receive a weekly email with positive worldly news,
        productivity tips, and fun at-home activities!
      </p>
      <EmailBox />
      <img
        className={styles.Phone2}
        src={Phone}
        alt="Screenshot of Samwise positivity newsletter on iPhone XR"
      />
      <BEARRRR className={styles.BEARRRR} />
    </div>
    <div className={styles.Right}>
      <img
        className={styles.Phone}
        src={Phone}
        alt="Screenshot of Samwise positivity newsletter on iPhone XR"
      />
    </div>
  </div>
);
