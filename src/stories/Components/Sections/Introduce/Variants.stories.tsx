import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from '@storybook/react';
import Introduce, { IntroduceProps } from '@/components/Introduce/Introduce';

const meta: Meta<typeof Introduce> = {
  title: 'Components/Introduce/Variants',
  component: Introduce,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

const Template = (args: IntroduceProps) => {
  return (
    <Introduce>
      <Introduce.Title text="INTRODUCE" />
      <Introduce.BodyWrap>
        <Introduce.Face
          src="https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png"
          alt="성연 프로필 사진"
        />
        <Introduce.AboutMe
          slogan="사용하고 싶은 웹을 만드는 개발자 윤성연 입니다"
          intro_text={`안녕하세요 ! 더 좋은 제품을 만들기 위해 고민하는 개발자, 윤성연 입니다
좋은 사용자 경험의 기본은 좋은 성능 이라고 생각하여, 어떻게 개선해 나갈지 생각하며 작업합니다
같이 일 하고 싶은 개발자가 되고자 하는 마음으로 동료 들과 협업 합니다.`}
        />
      </Introduce.BodyWrap>
    </Introduce>
  );
};

type Story = StoryObj<typeof Introduce>;
export const Container_XXL: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xxl',
    },
  },
  render: Template,
};

export const Laptop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-xl',
    },
  },
  render: Template,
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'container-l',
    },
  },
  render: Template,
};

export const Mobile390: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile390',
    },
  },
  render: Template,
};

export default meta;
