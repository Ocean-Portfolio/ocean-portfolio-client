import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { buttonStatusVariants, buttonVariants } from './Button.css';

describe('Button 컴포넌트', () => {
  it('클래스 이름이 올바르게 적용되어야 한다', () => {
    const className = 'test-class';
    const { getByRole } = render(
      <Button className={className} size="M">
        테스트 버튼
      </Button>,
    );

    const button = getByRole('button');
    expect(button).toHaveClass(className);
    expect(button).toHaveClass(buttonVariants['M']);
  });

  it('상태에 따라 적절한 클래스가 적용되어야 한다', () => {
    const { getByRole } = render(
      <Button size="M" status="HOVER">
        테스트 버튼
      </Button>,
    );

    const button = getByRole('button');
    expect(button).toHaveClass(buttonStatusVariants['MHOVER']);
  });

  it('onClick 핸들러가 호출되어야 한다', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button size="M" onClick={handleClick}>
        테스트 버튼
      </Button>,
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
