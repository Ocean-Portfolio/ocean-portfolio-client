import { Meta, StoryObj } from '@storybook/react';
import CommonIcon from '@/composable/Icon/CommonIcon';

const meta: Meta<typeof CommonIcon> = {
  title: 'Common/Icon/CommonIcon',
  component: CommonIcon,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof CommonIcon>;
export const Variants_Hamburger: Story = {
  args: {
    variant: 'HAMBURGER',
    width: 32,
    height: 32,
  },
};

export const Variants_DownArrow: Story = {
  args: {
    variant: 'DOWN_ARROW',
    width: 20,
    height: 20,
  },
};

export const Variants_LargeClose: Story = {
  args: {
    variant: 'LARGE_CLOSE',
    width: 45,
    height: 45,
  },
};

export const Variants_LeftArrow: Story = {
  args: {
    variant: 'LEFT_ARROW',
    width: 32,
    height: 32,
  },
};

export default meta;
