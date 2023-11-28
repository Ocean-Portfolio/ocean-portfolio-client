import { render } from '@testing-library/react';
import {
  iconBackgroundTokens,
  iconColorTokens,
  iconCommonTokens,
  iconCompanyTokens,
  iconStateTokens,
} from '@/mock/iconTokens.mock';
import { randomIndex, randomBetweenNumber } from '@/utils/number/random';
import capitalizeFirstLetter from '@/utils/string/capitalizeFirstLetter';
import CommonIcon from './CommonIcon';
import SocialIcon from './SocialIcon';

describe('Icon 컴포넌트들', () => {
  describe('1. CommonIcon 컴포넌트들', () => {
    test('1. Image 컴포넌트가 정확한 props로 렌더링 되는가?', () => {
      const testProps = {
        variant: iconCommonTokens[randomIndex(iconCommonTokens)],
        size: randomBetweenNumber(0, 200),
      };

      const { getByRole } = render(
        <CommonIcon
          variant={testProps.variant}
          width={testProps.size}
          height={testProps.size}
        />,
      );
      const image = getByRole('img');

      expect(image).toHaveAttribute('width', testProps.size.toString());
      expect(image).toHaveAttribute('height', testProps.size.toString());
      expect(image).toHaveAttribute('alt', testProps.variant);

      expect(image).toHaveAttribute(
        'src',
        expect.stringContaining(`${testProps.variant.toLowerCase()}`),
      );
    });
  });

  test('1. Image 컴포넌트가 정확한 props로 렌더링 되는가?', () => {
    const testProps = {
      company: iconCompanyTokens[randomIndex(iconCompanyTokens)],
      color: iconColorTokens[randomIndex(iconColorTokens)],
      background: iconBackgroundTokens[randomIndex(iconBackgroundTokens)],
      state: iconStateTokens[randomIndex(iconStateTokens)],
      size: randomBetweenNumber(0, 200),
    };

    const { getByRole } = render(
      <SocialIcon
        company={testProps.company}
        color={testProps.color}
        background={testProps.background}
        state={testProps.state}
        width={testProps.size}
        height={testProps.size}
      />,
    );
    const image = getByRole('img');

    expect(image).toHaveAttribute('width', testProps.size.toString());
    expect(image).toHaveAttribute('height', testProps.size.toString());
    expect(image).toHaveAttribute('alt', testProps.company);

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(`${capitalizeFirstLetter(testProps.company)}`),
    );

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(`${capitalizeFirstLetter(testProps.color)}`),
    );

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(`${capitalizeFirstLetter(testProps.background)}`),
    );

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(`${capitalizeFirstLetter(testProps.state)}`),
    );
  });
});
