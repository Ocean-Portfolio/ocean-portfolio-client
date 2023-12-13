import React from 'react';
import Container from '@/composable/Container/Container';
import { jaeyoonColorTheme } from '@/styles/theme/jaeyoon.css';

const Jaeyoon = () => {
  return (
    <Container as="main" className={jaeyoonColorTheme}>
      <div>jaeyoon page</div>
    </Container>
  );
};

export default Jaeyoon;
