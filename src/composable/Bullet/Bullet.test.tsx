import { render } from '@testing-library/react';
import React from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Bullet from './Bullet';
import { bulletStyle } from './Bullet.css';

describe('Bullet', () => {
  it('자식 요소가 올바르게 렌더링되어야 한다', () => {
    const testText = 'Test Content';
    const { getByText } = render(<Bullet>{testText}</Bullet>);

    expect(getByText(testText)).toBeInTheDocument();
  });

  it('적절한 스타일 클래스가 적용되어야 한다', () => {
    const { container } = render(<Bullet>테스트</Bullet>);
    const bullet = container.firstChild;

    expect(bullet).toHaveClass(bulletStyle);
    expect(bullet).toHaveClass(fontVariants['paragraph-m-bold']);
  });
});
