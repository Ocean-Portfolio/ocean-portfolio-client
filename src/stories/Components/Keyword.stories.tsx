import { Meta, StoryObj } from '@storybook/react';
import Keyword from '@/components/Keyword/Keyword';
import { backgroundColorVariants } from '@/styles/common/color.css';

const meta: Meta<typeof Keyword> = {
  title: 'Components/Keyword',
  component: Keyword,
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

type Story = StoryObj<typeof Keyword>;
export const Small_Left: Story = {
  args: {
    direction: 'LEFT',
    sizeToken: 'SMALL',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '대화하고 싶어지는',
    description: '부드러운 커뮤니케이션을 추구해요.',
  },
};

export const Small_Right: Story = {
  args: {
    direction: 'RIGHT',
    sizeToken: 'SMALL',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '직접 해보는',
    description: '직접 예시를 만들어\n빠르게 테스트하고 피드백 해요.',
  },
};

export const Medium_Left: Story = {
  args: {
    direction: 'LEFT',
    sizeToken: 'MEDIUM',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '대화하고 싶어지는',
    description: '부드러운 커뮤니케이션을 추구해요.',
  },
};

export const Medium_Right: Story = {
  args: {
    direction: 'RIGHT',
    sizeToken: 'MEDIUM',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '직접 해보는',
    description: '직접 예시를 만들어\n빠르게 테스트하고 피드백 해요.',
  },
};

export const Large_Left: Story = {
  args: {
    direction: 'LEFT',
    sizeToken: 'LARGE',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '대화하고 싶어지는',
    description: '부드러운 커뮤니케이션을 추구해요.',
  },
};

export const Large_Right: Story = {
  args: {
    direction: 'RIGHT',
    sizeToken: 'LARGE',
    src: 'https://picsum.photos/200/300',
    alt: 'alt',
    main_text: '직접 해보는',
    description: '직접 예시를 만들어\n빠르게 테스트하고 피드백 해요.',
  },
};

export default meta;
