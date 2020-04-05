import React, { useState, useEffect } from 'react';
import Result from './Result';
import styles from './EmailBox.module.css';
import { ResultType } from './types';
import { getEmails, addEmail } from './firebase/api';

export default (): React.ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [emails, setEmails] = useState<string[]>([]);
  const [result, setResult] = useState<ResultType>('None');

  const fetchData = async (): Promise<void | string[]> => getEmails().then((res) => res);

  useEffect(() => {
    fetchData()
      .then((list) => list && setEmails(list));
  }, []);

  const validEmail = (input: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const submitEmail = async (): Promise<void> => {
    try {
      setResult('Loading');
      if (!validEmail(email)) {
        setResult('invalidInput');
        return;
      }
      if (emails.includes(email)) {
        setResult('exists');
        return;
      }
      addEmail(email);
      setEmail('');
      setResult('Success');
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className={styles.EmailBox}>
      <input
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        className={styles.Input}
      />
      <button
        type="submit"
        onClick={submitEmail}
        className={styles.Button}
      >
        Sign Up!
      </button>
      <div className={styles.Result}>
        <Result result={result} />
      </div>
    </div>
  );
};
