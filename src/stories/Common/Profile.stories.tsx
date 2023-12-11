import { Meta, StoryObj } from '@storybook/react';
import Profile from '@/composable/Profile/Profile';
import { globalThemeVars } from '@/styles/theme.css';

const meta: Meta<typeof Profile> = {
  title: 'Common/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: globalThemeVars.color['gray-scale-02'],
        }}
      >
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Profile>;
export const Vertical: Story = {
  args: {
    layout: 'VERTICAL',
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: '성연 프로필 사진',
    name: '윤성연',
    job: 'Software Engineer, Frontend',
    social: [
      {
        company: 'GITHUB',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://github.com/steven-yn',
      },
      {
        company: 'NOTION',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://yoon0cean.notion.site/Junior-Frontend-Developer-Portfoilo-35564255600a45fc9f3e0207f2dc0ad3?pvs=4',
      },
      {
        company: 'LINKEDIN',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://www.linkedin.com/in/yoon-sung-yeon/',
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    layout: 'HORIZONTAL',
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: '성연 프로필 사진',
    name: '윤성연',
    job: 'Software Engineer, Frontend',
    social: [
      {
        company: 'GITHUB',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://github.com/steven-yn',
      },
      {
        company: 'NOTION',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://yoon0cean.notion.site/Junior-Frontend-Developer-Portfoilo-35564255600a45fc9f3e0207f2dc0ad3?pvs=4',
      },
      {
        company: 'LINKEDIN',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://www.linkedin.com/in/yoon-sung-yeon/',
      },
    ],
  },
};

export default meta;
