import React, { ReactElement } from 'react';
import { ResultType } from './types';

type Props = {
  readonly result: ResultType;
}

export default ({ result }: Props): ReactElement => {
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
