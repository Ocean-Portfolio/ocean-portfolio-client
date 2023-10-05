import { render } from '@testing-library/react';
import React from 'react';
import Tag from './Tag';

describe('<Tag /> Component', () => {
  test('1. 문제없이 렌더링 된다', () => {
    render(<Tag as="span">Test Content</Tag>);
  });

  test('2. 주어진 태그로 렌더링 된다', () => {
    const { container } = render(<Tag as="span">Test Content</Tag>);
    const tagElement = container.querySelector('span');
    expect(tagElement).not.toBeNull();
    expect(tagElement?.textContent).toBe('Test Content');
  });

  test('3. prop이 제공되지 않은 경우 기본 태그(div)로 렌더링된다.', () => {
    const { container } = render(<Tag>Test Content</Tag>);
    const tagElement = container.querySelector('div');
    expect(tagElement).not.toBeNull();
    expect(tagElement?.textContent).toBe('Test Content');
  });
});
