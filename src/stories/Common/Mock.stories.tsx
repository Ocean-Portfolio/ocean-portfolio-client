import { Meta, StoryObj } from '@storybook/react';
import Mock from '@/composable/Mock/Mock';

const meta: Meta<typeof Mock> = {
  title: 'Common/Mock',
  component: Mock,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Mock>;
export const Desktop: Story = {
  args: {
    device: 'DESKTOP',
    src: '/logo.svg',
    width: '10rem',
    height: '10rem',
  },
};

export const Mobile: Story = {
  args: {
    device: 'MOBILE',
    src: '/logo.svg',
    width: '10rem',
    height: '10rem',
  },
};

export default meta;
