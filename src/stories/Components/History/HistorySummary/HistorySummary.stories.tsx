import { Meta, StoryObj } from '@storybook/react';
import HistorySummary from '@/components/History/Summary/HistorySummary';

const meta: Meta<typeof HistorySummary> = {
  title: 'Components/History/Summary',
  component: HistorySummary,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof HistorySummary>;
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
    isDetailView: false,
  },
};

export default meta;
