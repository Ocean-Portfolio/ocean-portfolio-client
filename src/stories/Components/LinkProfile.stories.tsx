import { Meta, StoryObj } from '@storybook/react';
import LinkProfile from '@/components/LinkProfile/LinkProfile';

const meta: Meta<typeof LinkProfile> = {
  title: 'Components/LinkProfile',
  component: LinkProfile,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof LinkProfile>;
export const Default: Story = {
  args: {
    user_id: '1',
    name: '윤성연',
    job: 'Software Engineer, Frontend',
    src: 'https://cdn.brand-ing.me/profiles/2023-12-11_my_profile_img.png',
    alt: '성연 프로필 이미지',
    social: [
      {
        company: 'GITHUB',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://github.com/steven-yn',
      },
      {
        company: 'LINKEDIN',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://www.linkedin.com/in/yoon-sung-yeon/',
      },
      {
        company: 'NOTION',
        color: 'GRAY',
        background: 'NONE',
        state: 'DEFAULT',
        url: 'https://yoon0cean.notion.site/Junior-Frontend-Developer-Portfoilo-35564255600a45fc9f3e0207f2dc0ad3?pvs=4',
      },
    ],
  },
};

export default meta;
