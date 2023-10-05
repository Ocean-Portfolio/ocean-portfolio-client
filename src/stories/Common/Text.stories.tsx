import { Meta, StoryObj } from '@storybook/react';
import Text from '@/composable/Text/Text';
import { colorVariants } from '@/styles/color.css';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Text>;
export const Default: Story = {
  args: {
    as: 'p',
    className: colorVariants['sungyeon-02'],
    typoToken: 'display-l-bold',
    children: '돈 많은 백수이고 싶어요',
  },
};

export default meta;
