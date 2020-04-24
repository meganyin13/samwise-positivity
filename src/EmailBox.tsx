import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import Result from './Result';
import styles from './EmailBox.module.css';
import { ResultType } from './types';
import addEmail from './firebase/api';

export default (): React.ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [result, setResult] = useState<ResultType>('None');

  const validEmail = (input: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const confettiConfig = {
    angle: 0,
    spread: 360,
    startVelocity: 18,
    elementCount: 200,
    dragFriction: 0.1,
    duration: 3000,
    delay: 0,
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setResult('None');
    setEmail(e.currentTarget.value);
  };

  const submitEmail = async (): Promise<void> => {
    setResult('Loading');
    if (!validEmail(email)) {
      setResult('invalidInput');
      return;
    }
    addEmail(email)
      .then(() => {
        setEmail('');
        setResult('Success');
      })
      .catch(() => {
        // Duplicate email
        setResult('exists');
      });
  };

  return (
    <div className={styles.EmailBox}>
      <input
        type="text"
        placeholder="enter email"
        value={email}
        onChange={onInputChange}
        className={styles.Input}
      />
      <button
        type="submit"
        onClick={submitEmail}
        className={styles.Button}
      >
        Sign Up!
      </button>
      <div style={{
        position: 'relative',
        left: '50%',
        top: '10%',
      }}
      >
        <Confetti active={result === 'Success'} config={confettiConfig} />
      </div>
      <div className={styles.Result}>
        <Result result={result} />
      </div>
    </div>
  );
};
