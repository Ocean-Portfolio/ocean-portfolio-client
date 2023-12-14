import { render } from '@testing-library/react';
import { SocialIconProps } from '../../composable/Icon/SocialIcon';
import Profile from './Profile';
import { wrapVariants } from './Profile.css';

describe('Profile 컴포넌트', () => {
  const mockProps: {
    layout: 'HORIZONTAL' | 'VERTICAL';
    src: string;
    alt: string;
    name: string;
    job: string;
    social?: Array<
      SocialIconProps & {
        url: string;
      }
    >;
  } = {
    layout: 'HORIZONTAL' as 'HORIZONTAL' | 'VERTICAL',
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png ',
    alt: '테스트 이미지',
    name: '홍길동',
    job: '개발자',
    social: [
      {
        url: 'https://example.com',
        company: 'FACEBOOK',
        color: 'BRAND',
        background: 'NONE',
        state: 'DEFAULT',
      },
    ],
  };
  it('모든 props가 정확하게 렌더링되어야 한다', () => {
    const { getByText, getByAltText, getByRole } = render(
      <Profile {...mockProps} />,
    );
    // 이미지 검증
    const image = getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    // 이름과 직업 텍스트 검증
    const name = getByText(mockProps.name);
    expect(name).toBeInTheDocument();
    const job = getByText(mockProps.job);
    expect(job).toBeInTheDocument();
    // 소셜 아이콘 검증
    const socialLink = getByRole('link');
    expect(socialLink).toHaveAttribute(
      'href',
      mockProps.social && mockProps.social[0].url,
    );
    const socialIcon = socialLink.firstChild;
    expect(socialIcon).toBeInTheDocument();
  });

  it('레이아웃에 따라 적절한 클래스가 적용되어야 한다', () => {
    const { container } = render(<Profile {...mockProps} />);
    expect(container.firstChild).toHaveClass(wrapVariants[mockProps.layout]);
  });
});
