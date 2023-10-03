import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Typography>;
export const Default: Story = {};

export default meta;
