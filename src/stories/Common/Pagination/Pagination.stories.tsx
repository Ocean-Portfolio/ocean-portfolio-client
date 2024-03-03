import { Meta, StoryObj } from '@storybook/react';
import Pagination from '@/composable/Pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Common/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Pagination>;
export const XLarge: Story = {
  args: {
    sizeToken: 'XLARGE',
    length: 5,
    selectedIdx: 0,
  },
};

export const Large: Story = {
  args: {
    sizeToken: 'LARGE',
    length: 5,
    selectedIdx: 0,
  },
};

export const Medium: Story = {
  args: {
    sizeToken: 'MEDIUM',
    length: 5,
    selectedIdx: 0,
  },
};

export default meta;
