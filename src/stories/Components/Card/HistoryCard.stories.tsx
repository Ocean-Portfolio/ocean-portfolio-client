import { Meta, StoryObj } from '@storybook/react';
import HistoryCard, {
  HistoryCardProps,
} from '@/components/Card/History/HistoryCard';
import { backgroundColorVariants } from '@/styles/common/color.css';

const meta: Meta<typeof HistoryCard> = {
  title: 'Components/Card/HistoryCard',
  component: HistoryCard,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className={backgroundColorVariants['gray-scale-04']}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: HistoryCardProps) => {
  return (
    <HistoryCard {...args}>
      <HistoryCard.Company />
      <HistoryCard.Period />
    </HistoryCard>
  );
};

type Story = StoryObj<typeof HistoryCard>;

export const Large: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'LARGE',
    companyName: '다이닝 코드',
    positionName: 'Frontend Developer',
    period: '2022.04 ~ 2023.06',
  },
  render: Template,
};

export const Small: Story = {
  args: {
    visible_status: 'VISIBLE',
    sizeToken: 'SMALL',
    companyName: '다이닝 코드',
    positionName: 'Frontend Developer',
    period: '2022.04 ~ 2023.06',
  },
  render: Template,
};

export default meta;
