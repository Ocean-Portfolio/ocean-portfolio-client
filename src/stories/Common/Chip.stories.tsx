import { Meta, StoryObj } from '@storybook/react';
import Chip from '@/composable/Chip/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Common/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Chip>;
export const Default: Story = {
  args: {
    children: '2023.07.04 - 2023.07.07',
  },
};

export default meta;
