import { render } from '@testing-library/react';
import { ASSET_ENDPOINT } from '@/const/endpoint';
import {
  iconBackgroundTokens,
  iconColorTokens,
  iconCompanyTokens,
  iconStateTokens,
} from '@/mock/iconTokens.mock';
import iconResourceSrcFormat from '@/utils/iconResourceSrcFormat';
import { randomIndex, randomOneNumber } from '@/utils/random';
import Icon from './Icon';

describe('Icon 컴포넌트', () => {
  test('1. Image 컴포넌트가 정확한 props로 렌더링 되는가?', () => {
    const testProps = {
      company: iconCompanyTokens[randomIndex(iconCompanyTokens)],
      color: iconColorTokens[randomIndex(iconColorTokens)],
      background: iconBackgroundTokens[randomIndex(iconBackgroundTokens)],
      state: iconStateTokens[randomIndex(iconStateTokens)],
      size: randomOneNumber(0, 200),
    };

    const resource = iconResourceSrcFormat({
      company: testProps.company,
      color: testProps.color,
      background: testProps.background,
      state: testProps.state,
    });

    const path = `${ASSET_ENDPOINT}/icons/${testProps.company}`;

    const imageSrc = `${path}/${resource}`;

    const { getByRole } = render(
      <Icon
        src={`${path}/${resource}`}
        company={testProps.company}
        color={testProps.color}
        background={testProps.background}
        state={testProps.state}
        width={testProps.size}
        height={testProps.size}
        alt={testProps.company}
      />,
    );
    const image = getByRole('img');

    expect(image).toHaveAttribute('width', testProps.size.toString());
    expect(image).toHaveAttribute('height', testProps.size.toString());
    expect(image).toHaveAttribute('alt', testProps.company);

    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(
        `/_next/image?url=${encodeURIComponent(imageSrc)}`,
      ),
    );
  });
});
