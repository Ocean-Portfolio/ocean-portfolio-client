import { Meta, StoryObj } from '@storybook/react';
import Chip from '@/composable/Chip/Chip';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { ODSUserColorKeyList } from '@/styles/theme/index.css';
import { jaeyoonColorTheme } from '@/styles/theme/jaeyoon.css';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';
import { yejiColorTheme } from '@/styles/theme/yeji.css';

const meta: Meta<typeof Chip> = {
  title: 'Common/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Chip>;
export const Default: Story = {
  args: {
    children: '2023.07.04 - 2023.07.07',
    bgColorToken: 'tertiary',
  },
};

export const ColorVariants: Story = {
  render: () => {
    return (
      <div
        className={backgroundColorVariants['gray-scale-01']}
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {ODSUserColorKeyList.map((color) => (
          <Chip className={sungyeonColorTheme} key={color} bgColorToken={color}>
            {color}
          </Chip>
        ))}
        {ODSUserColorKeyList.map((color) => (
          <Chip className={yejiColorTheme} key={color} bgColorToken={color}>
            {color}
          </Chip>
        ))}
        {ODSUserColorKeyList.map((color) => (
          <Chip className={jaeyoonColorTheme} key={color} bgColorToken={color}>
            {color}
          </Chip>
        ))}
      </div>
    );
  },
};

export default meta;
