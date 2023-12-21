import { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import KeywordList from '@/components/KeywordList/KeywordList';
import Container from '@/composable/Container/Container';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';

const meta: Meta<typeof KeywordList> = {
  title: 'Components/KeywordList',
  component: KeywordList,
  parameters: { layout: 'fullscreen' },
  args: {
    children: (
      <>
        <KeywordList.Title />
        <KeywordList.Article />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Container
        as="main"
        className={classNames(
          sungyeonColorTheme,
          backgroundColorVariants['primary'],
        )}
      >
        <Story />
      </Container>
    ),
  ],
};

type Story = StoryObj<typeof KeywordList>;
export const Default: Story = {
  args: {
    title: 'KEY WORD',
    data: [
      {
        id: '1',
        main_text: '대화하고 싶어지는',
        description: '부드러운 커뮤니케이션을 추구해요.',
        visible_status: 'VISIBLE',
        image: {
          id: '1',
          name: '',
          storage_url: 'https://picsum.photos/200/300',
          description: 'alt',
        },
      },
      {
        id: '2',
        main_text: '직접 해보는',
        description: '직접 예시를 만들어\n빠르게 테스트하고 피드백 해요.',
        visible_status: 'VISIBLE',
        image: {
          id: '2',
          name: '',
          storage_url: 'https://picsum.photos/200/300',
          description: 'alt',
        },
      },
      {
        id: '3',
        main_text: '지속가능한',
        description:
          '하나에 모두 합치지 않아요.\n작게 쪼개서 효율적으로 관리해요.',
        visible_status: 'VISIBLE',
        image: {
          id: '3',
          name: '',
          storage_url: 'https://picsum.photos/200/300',
          description: 'alt',
        },
      },
    ],
  },
};

export const Container_XXL: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xxl',
    },
  },
  args: {
    ...Default.args,
  },
};

export const Container_XL: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xl',
    },
  },
  args: {
    ...Default.args,
  },
};

export const Container_L: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-l',
    },
  },
  args: {
    ...Default.args,
  },
};

export const Container_M: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-m',
    },
  },
  args: {
    ...Default.args,
  },
};

export const Container_S: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-s',
    },
  },
  args: {
    ...Default.args,
  },
};

export default meta;
