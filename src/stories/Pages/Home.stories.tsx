import { Meta, StoryObj } from '@storybook/react';
import { ApolloWrapper } from '@/apollo/apollo-wrapper';
import LinkProfileList from '@/components/LinkProfileList/client/LinkProfileList';
import Home from '@/pages/Home/Home';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <ApolloWrapper>
        <Story />
      </ApolloWrapper>
    ),
  ],
};

type Story = StoryObj<typeof Home>;
export const Default: Story = {
  args: {
    children: <LinkProfileList />,
  },
};

export default meta;
