import { Meta, StoryObj } from '@storybook/react';
import Chip from '@/composable/Chip/Chip';
import { ODSColorTokenVariables } from '@/const/colors';
import { globalThemeVars } from '@/styles/theme.css';

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
    backgroundColorToken: 'sungyeon-03',
  },
};

export const ColorVariants: Story = {
  render: () => {
    const colors = Object.keys(ODSColorTokenVariables) as ODSColorToken[];
    return (
      <div
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '1rem',
          backgroundColor: globalThemeVars.color['gray-scale-01'],
        }}
      >
        {colors.map((color) => (
          <Chip key={color} backgroundColorToken={color}>
            {color}
          </Chip>
        ))}
      </div>
    );
  },
};

export default meta;
