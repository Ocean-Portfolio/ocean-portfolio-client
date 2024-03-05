import { Meta, StoryObj } from '@storybook/react';
import HistorySwiperSummary from '@/components/HistorySwiper/Summary/HistorySwiperSummary';

const meta: Meta<typeof HistorySwiperSummary> = {
  title: 'Components/History/HistorySwiper/Summary',
  component: HistorySwiperSummary,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof HistorySwiperSummary>;
export const Default: Story = {
  args: {
    title: 'title',
    data: [
      { companyName: 'companyName', period: 'period', id: '311' },
      { companyName: 'companyName', period: 'period', id: '312' },
      { companyName: 'companyName', period: 'period', id: '313' },
      { companyName: 'companyName', period: 'period', id: '314' },
      { companyName: 'companyName', period: 'period', id: '315' },
      { companyName: 'companyName', period: 'period', id: '316' },
      { companyName: 'companyName', period: 'period', id: '317' },
    ],
  },
};

export default meta;
