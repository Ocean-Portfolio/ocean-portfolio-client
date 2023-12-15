import { Meta, StoryObj } from '@storybook/react';
import SkillCard from '@/components/Card/Skill/SkillCard';
import { backgroundColorVariants } from '@/styles/common/color.css';

const meta: Meta<typeof SkillCard> = {
  title: 'Components/Card/SkillCard',
  component: SkillCard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className={backgroundColorVariants['gray-scale-03']}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof SkillCard>;
export const Large: Story = {
  args: {
    sizeToken: 'LARGE',
    src: '/logo.svg',
    alt: 'react',
    name: 'React',
  },
};

export const Medium: Story = {
  args: {
    sizeToken: 'MEDIUM',
    src: '/logo.svg',
    alt: 'react',
    name: 'React',
  },
};

export const Small: Story = {
  args: {
    sizeToken: 'SMALL',
    src: '/logo.svg',
    alt: 'react',
    name: 'React',
  },
};

export default meta;
