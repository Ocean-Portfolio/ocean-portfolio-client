import React from 'react';
import Container from '@/composable/Container/Container';
import { yejiColorTheme } from '@/styles/theme/yeji.css';

const Yeji = () => {
  return (
    <Container as="main" className={yejiColorTheme}>
      <div>yeji page</div>
    </Container>
  );
};

export default Yeji;
