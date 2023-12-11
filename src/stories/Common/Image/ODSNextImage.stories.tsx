import { Meta, StoryObj } from '@storybook/react';
import ODSNextImage from '@/composable/Image/ODSNextImage';

const meta: Meta<typeof ODSNextImage> = {
  title: 'Common/Image/ODSNextImage',
  component: ODSNextImage,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof ODSNextImage>;
export const Image_50: Story = {
  args: {
    sizeToken: 'image-50',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_65: Story = {
  args: {
    sizeToken: 'image-65',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_75: Story = {
  args: {
    sizeToken: 'image-75',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_100: Story = {
  args: {
    sizeToken: 'image-100',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_115: Story = {
  args: {
    sizeToken: 'image-115',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_150: Story = {
  args: {
    sizeToken: 'image-150',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export const Image_200: Story = {
  args: {
    sizeToken: 'image-200',
    src: 'https://cdn.brand-ing.me/skills/2023-12-09_react_logo.png',
    alt: 'placeholder',
  },
};

export default meta;
