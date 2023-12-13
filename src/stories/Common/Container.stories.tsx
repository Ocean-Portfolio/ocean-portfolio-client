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
  tags: ['autodocs'],
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
        height: '100%',
      }}
    >
      반응형 컨테이너 입니다
      {children}
    </div>
  );
};

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    className: backgroundColorVariants['gray-scale-01'],
    style: {
      height: '600px',
    },
    children: (
      <Sample>
        <br />
        뷰포트별 케이스를 보시려면 왼쪽 메뉴를 이용해주세요
      </Sample>
    ),
  },
};

export const With360px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile360',
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

export const With390px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile390',
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

export const With768px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
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

export const With900px: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
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
