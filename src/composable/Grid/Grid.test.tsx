import { render } from '@testing-library/react';
import React from 'react';
import Grid from './Grid';

describe('<Grid /> Component', () => {
  test('1. 문제없이 렌더링 된다', () => {
    render(<Grid as="div">Test Content</Grid>);
  });

  test('2. 그리드 스타일을 올바르게 적용한다', () => {
    const { container } = render(
      <Grid
        as="div"
        autoFlow="row"
        autoRows="1fr"
        autoColumns="1fr"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
      >
        Test Content
      </Grid>,
    );

    const gridElement = container.firstChild;
    const computedStyles = getComputedStyle(gridElement as Element);

    expect(computedStyles.gridAutoFlow).toBe('row');
    expect(computedStyles.gridAutoRows).toBe('1fr');
    expect(computedStyles.gridAutoColumns).toBe('1fr');
    expect(computedStyles.gridTemplateRows).toBe('repeat(3, 1fr)');
    expect(computedStyles.gridTemplateColumns).toBe('repeat(3, 1fr)');
  });

  test('2. 주어진 태그로 렌더링 된다', () => {
    const { container } = render(<Grid as="section">Test Content</Grid>);
    const gridElement = container.querySelector('section');
    expect(gridElement).not.toBeNull();
    expect(gridElement?.textContent).toBe('Test Content');
  });

  test('3. 제공된 스타일을 올바르게 병합한다', () => {
    const customStyles: React.CSSProperties = {
      backgroundColor: 'red',
      padding: '20px',
    };

    const { container } = render(
      <Grid as="div" style={customStyles}>
        Test Content
      </Grid>,
    );

    const gridElement = container.firstChild;
    const computedStyles = getComputedStyle(gridElement as Element);

    expect(computedStyles.backgroundColor).toBe('red');
    expect(computedStyles.padding).toBe('20px');
  });
});
