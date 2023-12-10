import { render } from '@testing-library/react';
import Spacer from './Spacer';

describe('Spacer 컴포넌트', () => {
  it('1. 수평 방향의 스페이서가 올바른 스타일을 가지고 있어야 하고, div 태그 여야 한다', () => {
    const { container } = render(
      <Spacer direction="horizontal" spacing="spacer-0" />,
    );
    const spacer = container.firstChild as HTMLElement;

    expect(spacer.tagName).toBe('DIV');
    expect(getComputedStyle(spacer).height).toBe('0px');
  });

  it('2. 수직 방향의 스페이서가 올바른 스타일을 가지고 있어야 하고, span 태그여야 한다', () => {
    const { container } = render(
      <Spacer direction="vertical" spacing="spacer-025" />,
    );
    const spacer = container.firstChild as HTMLElement;

    expect(spacer.tagName).toBe('SPAN');
    expect(getComputedStyle(spacer).width).toBe('0.25rem');
    expect(getComputedStyle(spacer).height).toBe('100%');
  });

  // it('3. 모든 spacer token 에 대해 스타일이 일치해야한다.', () => {
  //   const { container } = render(
  //     <>
  //       {spacerTokens.map((token) => (
  //         <Spacer key={token} spacing={token} />
  //       ))}
  //     </>,
  //   );
  //   const spacers = container.querySelectorAll('div');
  //   expect(spacers.length).toBe(spacerTokens.length);
  //   spacers.forEach((spacer, index) => {
  //     const { container } = render(<Spacer spacing={spacerTokens[index]} />);

  //     expect(getComputedStyle(spacer).height).toBe(
  //       getComputedStyle(container.firstChild as HTMLElement).height,
  //     );
  //   });
  // });
});
