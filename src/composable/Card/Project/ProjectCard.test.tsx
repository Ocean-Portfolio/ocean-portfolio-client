import { render } from '@testing-library/react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

describe('ProjectCard 컴포넌트', () => {
  const mockProps: ProjectCardProps = {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    colorThemeToken: 'sungyeon',
    projectMode: 'MAIN',
    projectStatus: 'CURRENT',
  };

  it('주어진 props에 따라 올바르게 렌더링되어야 한다', () => {
    const { getByText, getByAltText } = render(
      <ProjectCard {...mockProps}>
        <ProjectCard.Name name="프로젝트 이름" />
        <ProjectCard.Description content="프로젝트 설명" />
        <ProjectCard.Period period="2021-2022" />
        <ProjectCard.Image
          src="https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png"
          alt="이미지 설명"
        />
      </ProjectCard>,
    );

    expect(getByText('프로젝트 이름')).toBeInTheDocument();
    expect(getByText('프로젝트 설명')).toBeInTheDocument();
    expect(getByText('2021-2022')).toBeInTheDocument();
    const image = getByAltText('이미지 설명');
    expect(image).toBeInTheDocument();
  });
});
