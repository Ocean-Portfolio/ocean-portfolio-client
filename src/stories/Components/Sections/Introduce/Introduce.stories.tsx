import { Meta, StoryObj } from '@storybook/react';
import Introduce from '@/components/Sections/Introduce/Introduce';

const meta: Meta<typeof Introduce> = {
  title: 'Components/Sections/Introduce',
  component: Introduce,
  parameters: { layout: 'fullscreen' },
};

export const Default: StoryObj<typeof Introduce> = {
  render: () => (
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
  ),
};

export const Wrapper: StoryObj<typeof Introduce> = {
  args: {
    children: (
      <>
        <p>Introduce Wrapper Component</p>
        <p>Introduce Wrapper Component</p>
      </>
    ),
  },
};

export const Title: StoryObj<typeof Introduce.Title> = {
  args: {
    text: 'INTRODUCE',
  },
  decorators: [
    () => (
      <Introduce>
        <Introduce.Title text={Title.args?.text || ''} />
      </Introduce>
    ),
  ],
};

export const BodyWrap: StoryObj<typeof Introduce.BodyWrap> = {
  args: {
    children: (
      <>
        <p>Body Wrapper</p>
        <p>Body Wrapper</p>
      </>
    ),
  },
  decorators: [
    () => (
      <Introduce>
        <Introduce.Title text="INTRODUCE" />
        <Introduce.BodyWrap>{BodyWrap.args?.children}</Introduce.BodyWrap>
      </Introduce>
    ),
  ],
};

export const Face: StoryObj<typeof Introduce.Face> = {
  args: {
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: '성연 프로필 사진',
  },
  decorators: [
    () => (
      <Introduce.Face src={Face.args?.src || ''} alt={Face.args?.alt || ''} />
    ),
  ],
};

export const AboutMe: StoryObj<typeof Introduce.AboutMe> = {
  args: {
    slogan: '사용하고 싶은 웹을 만드는 개발자 윤성연 입니다',
    intro_text: `안녕하세요 ! 더 좋은 제품을 만들기 위해 고민하는 개발자, 윤성연 입니다
좋은 사용자 경험의 기본은 좋은 성능 이라고 생각하여, 어떻게 개선해 나갈지 생각하며 작업합니다
같이 일 하고 싶은 개발자가 되고자 하는 마음으로 동료 들과 협업 합니다.`,
  },
  decorators: [
    () => (
      <Introduce.AboutMe
        slogan={AboutMe.args?.slogan || ''}
        intro_text={AboutMe.args?.intro_text || ''}
      />
    ),
  ],
};

export default meta;
