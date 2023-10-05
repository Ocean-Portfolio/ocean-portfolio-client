import { Meta, StoryObj } from '@storybook/react';
import Grid from '@/composable/Grid/Grid';
import Text from '@/composable/Text/Text';
import { globalThemeVars } from '@/styles/theme.css';

const meta: Meta<typeof Grid> = {
  title: 'Common/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Grid>;
export const Default: Story = {
  args: {
    as: 'div',
    autoFlow: 'row',
    autoRows: '1fr',
    autoColumns: '1fr',
    templateColumns: 'repeat(3, 1fr)',
    style: {
      height: '200px',
    },
    children: (
      <>
        <Text
          style={{
            width: '100%',
            height: '100%',
            color: globalThemeVars.color['gray-scale-00'],
            backgroundColor: globalThemeVars.color['sungyeon-03'],
          }}
          typoToken="GNB-m-bold"
        >
          그리드를
        </Text>
        <Text
          style={{
            width: '100%',
            height: '100%',
            color: globalThemeVars.color['gray-scale-00'],
            backgroundColor: globalThemeVars.color['yeji-03'],
          }}
          typoToken="GNB-m-bold"
        >
          쉽게
        </Text>
        <Text
          style={{
            width: '100%',
            height: '100%',
            color: globalThemeVars.color['gray-scale-00'],
            backgroundColor: globalThemeVars.color['jaeyoon-03'],
          }}
          typoToken="GNB-m-bold"
        >
          다뤄봅시다
        </Text>
      </>
    ),
  },
};

export default meta;
