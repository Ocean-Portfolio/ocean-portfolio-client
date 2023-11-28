import { Meta, StoryObj } from '@storybook/react';
import SocialIcon from '@/composable/Icon/SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  title: 'Common/Icon/SocialIcon',
  component: SocialIcon,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof SocialIcon>;
export const BrandNoneDefault: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'BRAND',
    background: 'NONE',
    state: 'DEFAULT',
    style: { backgroundColor: 'transparent' },
  },
};

export const BrandCircularDefault: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'BRAND',
    background: 'CIRCULAR',
    state: 'DEFAULT',
  },
};

export const BrandRectanglarDefault: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'BRAND',
    background: 'RECTANGLAR',
    state: 'DEFAULT',
  },
};

export const GrayRectanglarHover: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'GRAY',
    background: 'RECTANGLAR',
    state: 'HOVER',
  },
};

export const GrayNoneDefault: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'GRAY',
    background: 'NONE',
    state: 'DEFAULT',
  },
};

export const WhiteNoneDefault_000: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 32,
    height: 32,
    color: 'WHITE',
    background: 'NONE',
    state: 'DEFAULT',
    style: { backgroundColor: '#000' },
  },
};

export const DiffCompany: Story = {
  args: {
    company: 'FACEBOOK',
    width: 32,
    height: 32,
    color: 'BRAND',
    background: 'NONE',
    state: 'DEFAULT',
  },
};

export const DiffSize: Story = {
  args: {
    company: 'INSTAGRAM',
    width: 64,
    height: 64,
    color: 'BRAND',
    background: 'NONE',
    state: 'DEFAULT',
  },
};

export default meta;
