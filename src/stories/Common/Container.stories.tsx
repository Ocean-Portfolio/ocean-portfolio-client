import { Canvas } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import Container from '@/composable/Container/Container';
import { backgroundColorVariants, colorVariants } from '@/styles/color.css';
import { flexCenter } from '@/styles/flex.css';

const meta: Meta<typeof Container> = {
  title: 'Common/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Container>;
export const Default: Story = {
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '450px',
    },
    children: (
      <div
        className={classNames(
          colorVariants['gray-scale-00'],
          backgroundColorVariants['sungyeon-02'],
          flexCenter,
        )}
        style={{
          height: '100%',
        }}
      >
        반응형 컨테이너 입니다
      </div>
    ),
  },
};

export default meta;
