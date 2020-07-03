import React from 'react';

import '../../css/Section.css';
import Container from 'react-bootstrap/Container';

export default function Section(props: any):
React.ReactElement {
  const { center, children } = props;
  return (
    <Container className={`${center ? 'text-center' : ''} progress`}>
      { children }
    </Container>

  );
}
