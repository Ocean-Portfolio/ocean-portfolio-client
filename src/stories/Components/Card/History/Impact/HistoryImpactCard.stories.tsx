import { Meta, StoryObj } from '@storybook/react';
import HistoryImpactCard, {
  HistoryImpactCardProps,
} from '@/components/Card/History/Impact/HistoryImpactCard';

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
};

type Story = StoryObj<typeof HistoryImpactCard>;
export const Large: Story = {
  args: {
    sizeToken: 'LARGE',
    before: '220',
    after: '330',
    unitWord: '만',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export const Small: Story = {
  args: {
    sizeToken: 'SMALL',
    before: '220',
    after: '330',
    unitWord: '만',
    content: '웹 리뉴얼을 통한\nMAU 지수 상승',
  },
};

export default meta;
