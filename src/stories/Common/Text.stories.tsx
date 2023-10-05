import { Meta, StoryObj } from '@storybook/react';
import Text from '@/composable/Text/Text';
import { globalThemeVars } from '@/styles/theme.css';

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
    typoToken: 'display-l-bold',
    style: {
      color: globalThemeVars.color['sungyeon-02'],
    },
    children: '돈 많은 백수이고 싶어요',
  },
};

export default meta;
