import { Meta, StoryObj } from '@storybook/react';
import Tag from '@/composable/Tag/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Common/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Tag>;
export const Default: Story = {
  args: {
    as: 'span',
    children: 'span 태그입니다',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'p 태그입니다',
  },
};

export const Anchor: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'a 태그입니다',
  },
};

export default meta;
