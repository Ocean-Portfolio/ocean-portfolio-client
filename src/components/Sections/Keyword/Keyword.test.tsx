import { getByAltText, render } from '@testing-library/react';
import { textPreStyle } from '@/styles/common/text.css';
import Keyword from './Keyword';
import {
  bulletStyle,
  gridExpeptJustifyWithSize,
  gridVariants,
  imageVariants,
  wrapVariants,
} from './Keyword.css';

describe('Keyword 컴포넌트', () => {
  const mockProps = {
    direction: 'LEFT' as const,
    sizeToken: 'SMALL' as const,
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '대화하고 싶어지는',
    description: '부드러운 커뮤니케이션을 추구해요.',
  };

  it('주어진 props에 따라 올바르게 렌더링되어야 한다', () => {
    const { getByText, getByAltText } = render(<Keyword {...mockProps} />);

    // 이미지와 텍스트 요소들의 렌더링 검증
    const image = getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    expect(getByText(mockProps.main_text)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
  });

  it('방향과 크기에 따라 적절한 스타일이 적용되어야 한다', () => {
    const { container } = render(<Keyword {...mockProps} />);

    // direction과 sizeToken에 따른 스타일 클래스 확인
    // 예시: 'gridVariants', 'wrapVariants' 등에 대한 검증
    // 예시: 이미지와 텍스트 요소에 대한 스타일 검증
    // 이 부분은 실제 스타일 클래스와 값에 따라 달라질 수 있으며, 필요에 따라 추가할 수 있습니다.

    // 예시: direction이 LEFT이고 sizeToken이 SMALL인 경우
    expect(container.firstChild).toHaveClass(gridVariants[mockProps.direction]);
    expect(container.firstChild).toHaveClass(wrapVariants[mockProps.sizeToken]);
    expect(container.firstChild).toHaveClass(gridExpeptJustifyWithSize);

    // 이미지에 imageVariants에 대한 스타일 검증
    const image = getByAltText(container, mockProps.alt);
    expect(image).toHaveClass(imageVariants[mockProps.direction]);

    // Bullet 컴포넌트에 bulletStyle에 대한 스타일 검증
    const bullet = container.querySelector(`.${bulletStyle}`);
    expect(bullet).toBeInTheDocument();

    const text = container.querySelector(`.${textPreStyle}`);
    expect(text).toBeInTheDocument();

    // 예시: direction이 RIGHT이고 sizeToken이 SMALL인 경우

    // const mockPropsRightSmall = {
    //   direction: 'RIGHT',
    //   sizeToken: 'SMALL',
    //   src: 'https://picsum.photos/200/300',
    //   alt: 'alt',
    //   main_text: '직접 해보는',
    //   description: '직접 예시를 만들어\n빠르게 테스트하고 피드백 해요.',
    // }

    // 예시: direction이 LEFT이고 sizeToken이 MEDIUM인 경우

    // 예시: direction이 RIGHT이고 sizeToken이 MEDIUM인 경우

    // 예시: direction이 RIGHT이고 sizeToken이 LARGE인 경우

    // 예시: direction이 LEFT이고 sizeToken이 LARGE인 경우
  });

  // 추가적인 테스트 케이스를 작성할 수 있습니다.
});
