import { Meta, Story } from '@storybook/react';
import ProjectCard, {
  ProjectCardProps,
} from '@/composable/Card/Project/ProjectCard';

const meta: Meta<ProjectCardProps> = {
  title: 'Common/Card/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

// 각 컴포넌트를 래핑할 기본 템플릿을 생성합니다.
const Template: Story<ProjectCardProps> = (args) => {
  return (
    <ProjectCard {...args}>
      <ProjectCard.Name name="구름톤 in Jeju 6기 - 도누리 : 모다드렁 (우수상)" />
      <ProjectCard.Description content="'모두 한데 모여'라는 의미의 제주도 방언, 레트로 감성을 디지털로 담아내는 제주 여행기록 및 공유 서비스" />
      <ProjectCard.Period period="2023.07.04 - 2023.07.07" />
      <ProjectCard.Image src="image_url.jpg" alt="프로젝트 이미지" />
    </ProjectCard>
  );
};

export const Large = Template.bind({});
Large.args = {
  visble_status: 'VISIBLE',
  sizeToken: 'LARGE',
  colorThemeToken: 'sungyeon',
  projectMode: 'MAIN',
  projectStatus: 'CURRENT',
};

export const Medium = Template.bind({});
Medium.args = {
  visble_status: 'VISIBLE',
  sizeToken: 'MEDIUM',
  colorThemeToken: 'sungyeon',
  projectMode: 'MAIN',
  projectStatus: 'CURRENT',
};

export const Small = Template.bind({});
Small.args = {
  visble_status: 'VISIBLE',
  sizeToken: 'SMALL',
  colorThemeToken: 'sungyeon',
  projectMode: 'MAIN',
  projectStatus: 'CURRENT',
};

export default meta;
