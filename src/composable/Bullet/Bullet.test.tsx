import { render } from '@testing-library/react';
import React from 'react';
import { fontVariants } from '@/styles/common/font.css';
import Bullet from './Bullet';
import { bulletFontVariants, bulletVariants } from './Bullet.css';

describe('Bullet', () => {
  it('자식 요소가 올바르게 렌더링되어야 한다', () => {
    const testText = 'Test Content';
    const { getByText } = render(<Bullet sizeToken="SMALL">{testText}</Bullet>);

    expect(getByText(testText)).toBeInTheDocument();
  });

  it('적절한 스타일 클래스가 적용되어야 한다', () => {
    const smallSizeToken = 'SMALL';
    const { container } = render(
      <Bullet sizeToken={smallSizeToken}>테스트</Bullet>,
    );
    const smallBullet = container.firstChild;

    expect(smallBullet).toHaveClass(bulletVariants[smallSizeToken]);
    // expect(smallBullet).toHaveClass(bulletFontVariants[smallSizeToken]);

    const mediumSizeToken = 'MEDIUM';
    const { container: container2 } = render(
      <Bullet sizeToken={mediumSizeToken}>테스트</Bullet>,
    );
    const mediumBullet = container2.firstChild;

    expect(mediumBullet).toHaveClass(bulletVariants[mediumSizeToken]);
    // expect(mediumBullet).toHaveClass(bulletFontVariants[mediumSizeToken]);

    const largeSizeToken = 'LARGE';
    const { container: container3 } = render(
      <Bullet sizeToken={largeSizeToken}>테스트</Bullet>,
    );

    const largeBullet = container3.firstChild;

    expect(largeBullet).toHaveClass(bulletVariants[largeSizeToken]);
    // expect(largeBullet).toHaveClass(bulletFontVariants[largeSizeToken]);
  });
});
