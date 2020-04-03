import React from 'react';
import { ResultType } from './types';

type Props = {
  readonly result: ResultType;
}

export default ({ result }: Props): React.ReactElement => {
  switch (result) {
    case 'Success':
      return <p>Thanks for subscribing!</p>;
    case 'Error':
      return <p>Error!</p>;
    case 'Loading':
      return <p>Loading...</p>;
    case 'None':
    default:
      return <p />;
  }
};
