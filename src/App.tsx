import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';
import './App.css';
import { ResultType } from './types';

export default () => {
  const [email, setEmail] = useState<string>('');
  const [result, setResult] = useState<ResultType>('None');

  const submitEmail = async () => {
    try {
      setResult('Loading');
      await axios.post('http://localhost:8080/addEmail', {
        email,
      });
      setEmail('');
      setResult('Success');
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <button
        type="submit"
        onClick={submitEmail}
      >
        Subscribe!
      </button>
      <Result result={result} />
    </div>
  );
};
