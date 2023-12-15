import { Meta, StoryObj } from '@storybook/react';
import Bullet from '@/composable/Bullet/Bullet';
import { commonColorThemeVars } from '@/styles/theme/index.css';

const meta: Meta<typeof Bullet> = {
  title: 'Common/Bullet',
  component: Bullet,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: commonColorThemeVars.token['gray-scale-05'] }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Bullet>;
export const Small: Story = {
  args: {
    children: '대화하고 싶어지는',
    sizeToken: 'SMALL',
  },
};

export const Medium: Story = {
  args: {
    children: '대화하고 싶어지는',
    sizeToken: 'MEDIUM',
  },
};

export const Large: Story = {
  args: {
    children: '대화하고 싶어지는',
    sizeToken: 'LARGE',
  },
};

export default meta;
