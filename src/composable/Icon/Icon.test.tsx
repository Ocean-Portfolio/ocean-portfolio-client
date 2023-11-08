import { render } from '@testing-library/react';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import {
  iconBackgroundTokens,
  iconColorTokens,
  iconCompanyTokens,
  iconStateTokens,
} from '@/mock/iconTokens.mock';
import { randomIndex, randomBetweenNumber } from '@/utils/number/random';
import capitalizeFirstLetter from '@/utils/string/capitalizeFirstLetter';
import Icon from './Icon';

describe('Icon 컴포넌트', () => {
  test('1. Image 컴포넌트가 정확한 props로 렌더링 되는가?', () => {
    const testProps = {
      company: iconCompanyTokens[randomIndex(iconCompanyTokens)],
      color: iconColorTokens[randomIndex(iconColorTokens)],
      background: iconBackgroundTokens[randomIndex(iconBackgroundTokens)],
      state: iconStateTokens[randomIndex(iconStateTokens)],
      size: randomBetweenNumber(0, 200),
    };

    const { getByRole } = render(
      <Icon
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
