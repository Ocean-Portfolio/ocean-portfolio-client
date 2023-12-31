import { render } from '@testing-library/react';
import { fontVariants } from '@/styles/common/font.css';
import Chip from './Chip';
import { chipStyle } from './Chip.css';

describe('Chip 컴포넌트', () => {
  it('자식 요소가 올바르게 렌더링되어야 한다', () => {
    const testContent = '테스트 콘텐츠';
    const colorToken = 'tertiary';
    const { getByText } = render(
      <Chip bgColorToken={colorToken}>{testContent}</Chip>,
    );

    const chipText = getByText(testContent);
    expect(chipText).toBeInTheDocument();
  });

  it('적절한 스타일 클래스가 적용되어야 한다', () => {
    const colorToken = 'tertiary';
    const { container } = render(<Chip bgColorToken={colorToken}>테스트</Chip>);
    const chip = container.firstChild;

    expect(chip).toHaveClass(chipStyle);
    expect(chip).toHaveClass(fontVariants['caption-m-semibold']);
  });

  // 추가적인 테스트 케이스를 작성할 수 있습니다.
});
