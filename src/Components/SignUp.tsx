import React from 'react';
import styles from '../css/SignUp.module.css';
import Newsletter from '../imgs/newsletter.png';

export default (): React.ReactElement => (
  <div className={styles.SignUp}>
    <div className={styles.Left}>
      <h3 className={styles.PromptTitle}>This week's positivity prompt:</h3>
      <p className={styles.PromptText}>Tell us something inspiring you saw someone else do this week!</p>
      <form className={styles.PromptBox}>
        <input className={styles.PromptBoxInside} type='textbox' placeholder='Enlighten us by typing here...'></input>
      </form>
      <button type='submit' className={styles.Button}>Submit</button>
      <img className={styles.Image} src={Newsletter} alt='current newsletter'></img>
    </div>
  </div>
);
