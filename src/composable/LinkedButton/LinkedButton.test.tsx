import { render, fireEvent } from '@testing-library/react';
import LinkedButton from './LinkedButton';
import { buttonStatusVariants, buttonVariants } from './LinkedButton.css';

describe('LinkedButton 컴포넌트', () => {
  it('클래스 이름이 올바르게 적용되어야 한다', () => {
    const className = 'test-class';
    const { getByRole } = render(
      <LinkedButton className={className} size="M">
        테스트 버튼
      </LinkedButton>,
    );

    const button = getByRole('button');
    expect(button).toHaveClass(className);
    expect(button).toHaveClass(buttonVariants['M']);
  });

  it('상태에 따라 적절한 클래스가 적용되어야 한다', () => {
    const { getByRole } = render(
      <LinkedButton size="M" status="HOVER">
        테스트 버튼
      </LinkedButton>,
    );

    const button = getByRole('button');
    expect(button).toHaveClass(buttonStatusVariants['MHOVER']);
  });

  it('onClick 핸들러가 호출되어야 한다', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <LinkedButton size="M" onClick={handleClick}>
        테스트 버튼
      </LinkedButton>,
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
