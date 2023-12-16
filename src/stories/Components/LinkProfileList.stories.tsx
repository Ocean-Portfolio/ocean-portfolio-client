import { Meta, StoryObj } from '@storybook/react';
import classNames from 'classnames';
import { ApolloWrapper } from '@/apollo/apollo-wrapper';
import { profileListStyle } from '@/app/page.css';
import LinkProfileList from '@/components/LinkProfileList/client/LinkProfileList';
import { backgroundColorVariants } from '@/styles/common/color.css';

const meta: Meta<typeof LinkProfileList> = {
  title: 'Components/LinkProfileList',
  component: LinkProfileList,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <ApolloWrapper>
        <div
          className={classNames(
            profileListStyle,
            backgroundColorVariants['secondary-variant'],
          )}
        >
          <Story />
        </div>
      </ApolloWrapper>
    ),
  ],
};

type Story = StoryObj<typeof LinkProfileList>;
export const Default: Story = {};

export default meta;
