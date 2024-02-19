import { Meta, StoryObj } from '@storybook/react';
import ProjectCard, {
  ProjectCardProps,
} from '@/components/Card/Project/ProjectCard';
import { jaeyoonColorTheme } from '@/styles/theme/jaeyoon.css';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';
import { yejiColorTheme } from '@/styles/theme/yeji.css';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/Card/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

const Template = (args: ProjectCardProps) => {
  return (
    <ProjectCard {...args}>
      <ProjectCard.Name />
      <ProjectCard.Description />
      <ProjectCard.Period />
      <ProjectCard.Image />
    </ProjectCard>
  );
};

type Story = StoryObj<typeof ProjectCard>;

export const Large: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    projectMode: 'MAIN',
    projectStatus: 'CURRENT',
    name: '구름톤 in Jeju 6기 - 도누리 : 모다드렁 (우수상)',
    content:
      "'모두 한데 모여'라는 의미의 제주도 방언, 레트로 감성을 디지털로 담아내는 제주 여행기록 및 공유 서비스",
    period: '2023.07.04 - 2023.07.07',
    src: 'image_url.jpg',
    alt: '프로젝트 이미지',
  },
  render: Template,
};

export const Medium: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'MEDIUM',
    projectMode: 'MAIN',
    projectStatus: 'CURRENT',
  },
  render: Template,
};

export const Small: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'SMALL',
    projectMode: 'MAIN',
    projectStatus: 'CURRENT',
  },
  render: Template,
};

const SungyeonWrapper = (args: ProjectCardProps) => {
  return (
    <div className={sungyeonColorTheme}>
      성연
      <Template {...args} />
    </div>
  );
};

const YejiWrapper = (args: ProjectCardProps) => {
  return (
    <div className={yejiColorTheme}>
      예지
      <Template {...args} />
    </div>
  );
};

const JaeyoonWrapper = (args: ProjectCardProps) => {
  return (
    <div className={jaeyoonColorTheme}>
      재윤
      <Template {...args} />
    </div>
  );
};

const ColorVariantsTemplate = (args: ProjectCardProps) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <SungyeonWrapper {...args} />
        <YejiWrapper {...args} />
        <JaeyoonWrapper {...args} />
      </div>
    </>
  );
};

export const ColorVariants: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    projectMode: 'MAIN',
    projectStatus: 'CURRENT',
  },
  render: ColorVariantsTemplate,
};

export default meta;
