import { render } from '@testing-library/react';
import React from 'react';
import Text from '@/composable/Text/Text';

describe('<Text /> Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('1. 문제없이 렌더링 된다', () => {
    const { getByText } = render(<Text as="p">Test Content</Text>);

    expect(getByText('Test Content')).toBeTruthy();
  });

  test('2. 타이포토큰 에 따른 스타일이 적용 되야한다', () => {
    const { getByText } = render(
      <Text as="p" typoToken="display-l-bold">
        Test Content for TypoToken
      </Text>,
    );

    const textElement = getByText('Test Content for TypoToken');
    const styles = getComputedStyle(textElement);
    expect(styles.fontSize).toBe('4rem');
  });
});
