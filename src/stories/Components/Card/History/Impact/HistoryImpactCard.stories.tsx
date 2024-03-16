import { Meta, StoryObj } from '@storybook/react';
import HistoryImpactCard, {
  HistoryImpactCardProps,
} from '@/components/Card/History/Impact/HistoryImpactCard';
import UserInfoProvider from '@/Provider/UserInfoProvider';

const Template = (args: HistoryImpactCardProps) => (
  <HistoryImpactCard {...args}>
    <HistoryImpactCard.Headline />
    <HistoryImpactCard.Content />
  </HistoryImpactCard>
);

const meta: Meta<typeof HistoryImpactCard> = {
  title: 'Components/Card/History/Impact/HistoryImpactCard',
  component: Template,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <UserInfoProvider>
        <Story />
      </UserInfoProvider>
    ),
  ],
};

type Story = StoryObj<typeof HistoryImpactCard>;
export const Large: Story = {
  args: {
    sizeToken: 'LARGE',
    before: '220만',
    after: '330만',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export const Small: Story = {
  args: {
    sizeToken: 'SMALL',
    before: '220만',
    after: '330만',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export const PercentLarge: Story = {
  args: {
    sizeToken: 'LARGE',
    before: '70%',
    after: '120%',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export const PercentSmall: Story = {
  args: {
    sizeToken: 'SMALL',
    before: '70%',
    after: '9999%',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export default meta;
