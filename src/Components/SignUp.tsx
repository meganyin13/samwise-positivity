import React, { useState } from 'react';
import styles from '../css/SignUp.module.css';
import Newsletter from '../imgs/newsletter.png';
import { addPositiveMessage } from '../firebase/api';

function SignUp(): React.ReactElement {
  const [message, setMessage] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (message !== '') {
      addPositiveMessage(message);
      setMessage('');
    }
  };

  const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value);
  };

  return (
    <div className={styles.SignUp}>
      <div className={styles.Left}>
        <h3 className={styles.PromptTitle}>This week&apos;s positivity prompt:</h3>
        <p className={styles.PromptText}>
          Tell us something inspiring you saw someone else do this week!
        </p>
        <form className={styles.PromptBox} onSubmit={onSubmit}>
          <input className={styles.PromptBoxInside} type="textbox" onChange={onInputChange} value={message} placeholder="Enlighten us by typing here..." />
          <button type="submit" className={styles.Button}>Submit</button>
        </form>
        <img className={styles.Image} src={Newsletter} alt="current newsletter" />
      </div>
    </div>
  );
}

export default SignUp;
