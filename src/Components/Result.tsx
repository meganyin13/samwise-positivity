import React from 'react';
import { ResultType } from '../types';

type Props = {
  readonly result: ResultType;
}

export default ({ result }: Props): React.ReactElement => {
  switch (result) {
    case 'Success':
      return <p>Thanks for subscribing!</p>;
    case 'exists':
      return <p>You&apos;re already subscribed!</p>;
    case 'invalidInput':
      return <p>Please enter a valid email</p>;
    case 'Error':
      return <p>Error!</p>;
    case 'Loading':
      return <p>Loading...</p>;
    case 'None':
    default:
      return <p />;
  }
};
