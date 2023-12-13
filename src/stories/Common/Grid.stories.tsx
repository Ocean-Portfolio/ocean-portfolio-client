import { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import Grid from '@/composable/Grid/Grid';
import Text from '@/composable/Text/Text';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { jaeyoonColorTheme } from '@/styles/theme/jaeyoon.css';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';
import { yejiColorTheme } from '@/styles/theme/yeji.css';

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
          className={classNames(
            sungyeonColorTheme,
            colorVariants['gray-scale-03'],
            backgroundColorVariants['secondary'],
          )}
          style={{
            width: '100%',
            height: '100%',
          }}
          typoToken="GNB-m-bold"
        >
          그리드를
        </Text>
        <Text
          className={classNames(
            yejiColorTheme,
            colorVariants['gray-scale-03'],
            backgroundColorVariants['secondary'],
          )}
          style={{
            width: '100%',
            height: '100%',
          }}
          typoToken="GNB-m-bold"
        >
          쉽게
        </Text>
        <Text
          className={classNames(
            jaeyoonColorTheme,
            colorVariants['gray-scale-03'],
            backgroundColorVariants['secondary'],
          )}
          style={{
            width: '100%',
            height: '100%',
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
