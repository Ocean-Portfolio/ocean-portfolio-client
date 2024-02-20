import { render } from '@testing-library/react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

describe('ProjectCard 컴포넌트', () => {
  const mockProps: ProjectCardProps = {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    name: '프로젝트 이름',
    content: '프로젝트 설명',
    period: '2021-2022',
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: '이미지 설명',
  };

  it('주어진 props에 따라 올바르게 렌더링되어야 한다', () => {
    const { getByText, getByAltText } = render(
      <ProjectCard {...mockProps}>
        <ProjectCard.Name />
        <ProjectCard.Description />
        <ProjectCard.Period />
        <ProjectCard.Image />
      </ProjectCard>,
    );

    expect(getByText('프로젝트 이름')).toBeInTheDocument();
    expect(getByText('프로젝트 설명')).toBeInTheDocument();
    expect(getByText('2021-2022')).toBeInTheDocument();
    const image = getByAltText('이미지 설명');
    expect(image).toBeInTheDocument();
  });
});
