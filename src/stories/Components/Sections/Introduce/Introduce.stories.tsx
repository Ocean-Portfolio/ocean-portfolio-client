import { Meta, StoryObj } from '@storybook/react';
import Introduce from '@/components/Introduce/Introduce';

const meta: Meta<typeof Introduce> = {
  title: 'Components/Introduce',
  component: Introduce,
  parameters: { layout: 'fullscreen' },
  args: {
    children: (
      <>
        <Introduce.Title />
        <Introduce.BodyWrap>
          <Introduce.Face />
          <Introduce.AboutMe />
        </Introduce.BodyWrap>
      </>
    ),
    id: '1',
    title: 'INTRODUCE',
    slogan: '사용하고 싶은 웹을 만드는 개발자 윤성연 입니다',
    intro_text: `안녕하세요 ! 더 좋은 제품을 만들기 위해 고민하는 개발자, 윤성연 입니다
좋은 사용자 경험의 기본은 좋은 성능 이라고 생각하여, 어떻게 개선해 나갈지 생각하며 작업합니다
같이 일 하고 싶은 개발자가 되고자 하는 마음으로 동료 들과 협업 합니다.`,
    visible_status: 'VISIBLE',
    image: {
      id: '1',
      name: '2023-12-11_my_profile_img.png',
      storage_url:
        'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
      description: '성연 프로필 사진',
    },
  },
};

type Story = StoryObj<typeof Introduce>;

export const Default: Story = {
  args: {
    title: 'INTRODUCE',
    slogan: '사용하고 싶은 웹을 만드는 개발자 윤성연 입니다',
    intro_text: `안녕하세요 ! 더 좋은 제품을 만들기 위해 고민하는 개발자, 윤성연 입니다
좋은 사용자 경험의 기본은 좋은 성능 이라고 생각하여, 어떻게 개선해 나갈지 생각하며 작업합니다
같이 일 하고 싶은 개발자가 되고자 하는 마음으로 동료 들과 협업 합니다.`,
    image: {
      id: '1',
      name: '2023-12-11_my_profile_img.png',
      storage_url:
        'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
      description: '성연 프로필 사진',
    },
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
