import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import Container from '@/composable/Container/Container';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { flexCenter } from '@/styles/common/flex.css';

const meta: Meta<typeof Container> = {
  title: 'Common/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const Sample = ({
  children,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div
      className={classNames(
        colorVariants['gray-scale-00'],
        backgroundColorVariants['primary'],
        flexCenter,
      )}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      반응형 컨테이너 입니다
      {children}
    </div>
  );
};

type Story = StoryObj<typeof Container>;

export const Container_S_360px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-s',
    },
  },
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '100vh',
    },
    children: <Sample></Sample>,
  },
};

export const Container_M_768px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-m',
    },
  },
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '100vh',
    },
    children: <Sample></Sample>,
  },
};

export const Container_L_940px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-l',
    },
  },
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '100vh',
    },
    children: <Sample></Sample>,
  },
};

export const Container_XL_1280px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xl',
    },
  },
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '100vh',
    },
    children: <Sample></Sample>,
  },
};

export const Container_XXL_1440px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xxl',
    },
  },
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '100vh',
    },
    children: <Sample></Sample>,
  },
};

export default meta;
