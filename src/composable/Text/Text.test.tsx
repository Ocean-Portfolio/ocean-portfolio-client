import React from 'react';
import renderer from 'react-test-renderer';
import Text from '@/composable/Text/Text';

expect.extend(matchers);

describe('<Text /> Component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<Text as="p">Test Content</Text>).toJSON();

    expect(tree).not.toBeNull();
    if (tree) {
      const treeObj = JSON.parse(JSON.stringify(tree));

      expect(treeObj['children']).toContain('Test Content');
    }
  });

  it('applies typoToken style', () => {
    const tree = renderer
      .create(
        <Text as="p" typoToken="display-l-bold">
          Test Content for TypoToken
        </Text>,
      )
      .toJSON();

    console.log(tree, 'tree');

    expect(tree).toHaveStyleRule('font-size', '24px');
  });

  it('applies colorToken style', () => {
    const tree = renderer
      .create(
        <Text as="p" colorToken="sungyeon-03">
          Test Content for ColorToken
        </Text>,
      )
      .toJSON();

    expect(tree).toHaveStyleRule('color', '#ff0000');
  });
});
