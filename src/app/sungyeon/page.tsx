import React from 'react';
import Container from '@/composable/Container/Container';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';

const Sungyeon = () => {
  return (
    <Container as="main" className={sungyeonColorTheme}>
      <div>yoon0cean page</div>
    </Container>
  );
};

export default Sungyeon;
