import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import SkillCard from './SkillCard';

describe('SkillCard', () => {
  it('renders correctly', () => {
    const mockProps = {
      sizeToken: 'LARGE' as const,
      src: '/logo.svg',
      alt: 'Example Image',
      name: 'Example Skill',
    };

    render(<SkillCard {...mockProps} />);

    expect(
      screen.getByRole('img', { name: /example image/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/example skill/i)).toBeInTheDocument();
  });

  it('applies sizeToken styles correctly', () => {
    const mockProps = {
      sizeToken: 'SMALL' as const,
      src: '/logo.svg',
      alt: 'Example Image',
      name: 'Example Skill',
    };

    const { container } = render(<SkillCard {...mockProps} />);

    // 여기서는 예시로 wrapVariants의 SMALL 토큰에 따른 스타일을 확인합니다.
    // 실제 테스트는 프로젝트의 CSS-in-JS 솔루션에 따라 달라질 수 있습니다.
    expect(container.firstChild).toHaveStyle(`padding: 0.625rem`);
    expect(container.firstChild).toHaveStyle(`borderRadius: 0.25rem`);
    expect(container.firstChild).toHaveStyle(
      `backgroundColor: rgba(239, 254, 255, 0.30)`,
    );
  });

  // 추가적인 테스트 케이스들...
});
