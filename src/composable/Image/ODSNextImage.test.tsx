import { render } from '@testing-library/react';
import { ODSImageTokenVariables } from '@/const/images';
import calcRemToPxNumber from '@/utils/style/calcRemToPxNumber';
import ODSNextImage from './ODSNextImage';

describe('ODSNextImage 컴포넌트', () => {
  const testProps = {
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: '테스트 이미지',
    className: 'test-class',
  };

  Object.entries(ODSImageTokenVariables).forEach(
    ([sizeToken, { width, height }]) => {
      it(`${sizeToken} 사이즈에 대한 width와 height가 올바르게 설정되어야 한다`, () => {
        const { getByAltText } = render(
          <ODSNextImage
            {...testProps}
            sizeToken={sizeToken as ImageSizeToken}
          />,
        );
        const image = getByAltText(testProps.alt) as HTMLImageElement;

        expect(image).toHaveAttribute(
          'width',
          String(calcRemToPxNumber(width)),
        );
        expect(image).toHaveAttribute(
          'height',
          String(calcRemToPxNumber(height)),
        );
        expect(image).toHaveClass(testProps.className);
      });
    },
  );

  // 기타 ImageProps가 올바르게 전달되는지 확인하는 테스트를 추가할 수 있습니다.
});
