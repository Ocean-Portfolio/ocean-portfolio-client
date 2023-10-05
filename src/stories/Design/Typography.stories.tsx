import { Meta, StoryObj } from '@storybook/react';
import Typography from '@/components/storybook/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design/Typography',
  component: Typography,
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Typography>;
export const Default: Story = {};

export default meta;
