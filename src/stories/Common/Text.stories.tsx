import { Meta, StoryObj } from '@storybook/react';
import Text from '@/composable/Text/Text';
import { colorVariants } from '@/styles/common/color.css';

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
    className: colorVariants['primary'],
    typoToken: 'display-l-bold',
    children: 'Ocean Portfolio Text Component sss bbb',
  },
};

export default meta;
