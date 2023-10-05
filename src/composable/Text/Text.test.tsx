import { render } from '@testing-library/react';
import React from 'react';
import Text from '@/composable/Text/Text';

describe('<Text /> Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    const { getByText } = render(<Text as="p">Test Content</Text>);

    expect(getByText('Test Content')).toBeTruthy();
  });

  test('applies typoToken style', () => {
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
