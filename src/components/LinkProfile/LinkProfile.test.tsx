import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinkProfile from './LinkProfile';

// Mock Props
const mockProps = {
  user_id: '1',
  name: '윤성연',
  job: 'Software Engineer, Frontend',
  src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
  alt: '성연 프로필 이미지',
  social: [
    {
      company: 'GITHUB' as const,
      color: 'GRAY' as const,
      background: 'NONE' as const,
      state: 'DEFAULT' as const,
      url: 'https://github.com/steven-yn',
    },
    {
      company: 'LINKEDIN' as const,
      color: 'GRAY' as const,
      background: 'NONE' as const,
      state: 'DEFAULT' as const,
      url: 'https://www.linkedin.com/in/yoon-sung-yeon/',
    },
    {
      company: 'NOTION' as const,
      color: 'GRAY' as const,
      background: 'NONE' as const,
      state: 'DEFAULT' as const,
      url: 'https://yoon0cean.notion.site/Junior-Frontend-Developer-Portfoilo-35564255600a45fc9f3e0207f2dc0ad3?pvs=4',
    },
  ],
};

describe('LinkProfile Component', () => {
  it('renders Profile component with correct props', () => {
    const { getByAltText, getByText } = render(<LinkProfile {...mockProps} />);

    // 이미지 alt 속성으로 Profile 이미지가 올바르게 렌더링되었는지 확인
    const profileImage = getByAltText(mockProps.alt);
    expect(profileImage).toBeInTheDocument();

    // 이름으로 Profile 이름이 올바르게 렌더링되었는지 확인
    const profileName = getByText(mockProps.name);
    expect(profileName).toBeInTheDocument();

    // 직업이 제공되었는지 확인
    if (mockProps.job) {
      const profileJob = getByText(mockProps.job);
      expect(profileJob).toBeInTheDocument();
    }

    // 소셜 미디어 링크들이 올바르게 렌더링되었는지 확인
    // mockProps.social.forEach((socialMedia) => {
    //   const socialLink = getByText(socialMedia.company);
    //   expect(socialLink.closest('a')).toHaveAttribute('href', socialMedia.url);
    // });
  });
});
