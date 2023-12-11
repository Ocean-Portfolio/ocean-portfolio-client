import { Meta, StoryObj } from '@storybook/react';
import Bullet from '@/composable/Bullet/Bullet';
import { globalThemeVars } from '@/styles/theme.css';

const meta: Meta<typeof Bullet> = {
  title: 'Common/Bullet',
  component: Bullet,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: globalThemeVars.color['gray-scale-05'] }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Bullet>;
export const Default: Story = {
  args: {
    children: '대화하고 싶어지는',
  },
};

export default meta;
