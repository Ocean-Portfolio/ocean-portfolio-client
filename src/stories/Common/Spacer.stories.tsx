import { Meta, StoryObj } from '@storybook/react';
import Spacer from '@/composable/Spacer/Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Common/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Spacer>;
export const Default30: Story = {
  args: {
    spacing: 'spacer-30',
    bgColorToken: 'primary',
  },
};

export const Vertical30: Story = {
  args: {
    spacing: 'spacer-30',
    bgColorToken: 'primary',
    direction: 'vertical',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          height: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Horizontal80: Story = {
  args: {
    spacing: 'spacer-80',
    bgColorToken: 'primary',
    direction: 'horizontal',
  },
};

export const Vertical50: Story = {
  args: {
    spacing: 'spacer-50',
    bgColorToken: 'primary',
    direction: 'vertical',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          height: '2rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
