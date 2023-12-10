import { Meta, StoryObj } from '@storybook/react';
import Button from '@/composable/Button/Button';
import { globalThemeVars } from '@/styles/theme.css';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
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
        style={{
          backgroundColor: globalThemeVars.color['gray-scale-05'],
          minHeight: '10rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Button>;

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
