import { render, screen } from '@testing-library/react';
import React from 'react';
import Mock from './Mock';

describe('Mock Component', () => {
  it('renders Desktop correctly with given props', () => {
    const mockProps = {
      device: 'DESKTOP' as const,
      src: '/logo.svg',
      width: '10rem',
      height: '10rem',
    };

    render(<Mock {...mockProps} />);
    const svgElement = screen.getByTestId('desktop-svg'); // SVG에 data-testid="desktop-svg"를 추가해야 합니다.
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '10rem');
    expect(svgElement).toHaveAttribute('height', '10rem');
    // viewBox, fill, 다른 속성들에 대한 검증을 추가할 수 있습니다.
  });

  it('renders Mobile correctly with given props', () => {
    const mockProps = {
      device: 'MOBILE' as const,
      src: '/logo.svg',
      width: '10rem',
      height: '10rem',
    };

    render(<Mock {...mockProps} />);
    const svgElement = screen.getByTestId('mobile-svg'); // SVG에 data-testid="mobile-svg"를 추가해야 합니다.
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '10rem');
    expect(svgElement).toHaveAttribute('height', '10rem');
    // viewBox, fill, 다른 속성들에 대한 검증을 추가할 수 있습니다.
  });

  // layoutRatio 옵션을 사용하는 경우 등, 다른 테스트 케이스를 추가할 수 있습니다.
});
