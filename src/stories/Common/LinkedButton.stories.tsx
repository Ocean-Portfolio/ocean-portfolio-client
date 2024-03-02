import { Meta, StoryObj } from '@storybook/react';
import LinkedButton from '@/composable/LinkedButton/LinkedButton';
import { backgroundColorVariants } from '@/styles/common/color.css';

const meta: Meta<typeof LinkedButton> = {
  title: 'Common/Button/LinkedButton',
  component: LinkedButton,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['M', 'L'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['DEFAULT', 'HOVER', 'PRESS'],
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={backgroundColorVariants['gray-scale-05']}
        style={{
          minHeight: '10rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof LinkedButton>;

export const Default_M: Story = {
  args: {
    size: 'M',
    children: '더보기',
  },
};

export const Default_L: Story = {
  args: {
    size: 'L',
    children: '메일 보내기',
  },
};

export const Hover_M: Story = {
  args: {
    size: 'M',
    status: 'HOVER',
    children: '더보기',
  },
};

export const Hover_L: Story = {
  args: {
    size: 'L',
    status: 'HOVER',
    children: '메일 보내기',
  },
};

export const Press_M: Story = {
  args: {
    size: 'M',
    status: 'PRESS',
    children: '더보기',
  },
};

export const Press_L: Story = {
  args: {
    size: 'L',
    status: 'PRESS',
    children: '메일 보내기',
  },
};

export default meta;
