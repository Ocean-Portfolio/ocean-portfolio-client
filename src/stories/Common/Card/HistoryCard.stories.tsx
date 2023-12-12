import { Meta, StoryObj } from '@storybook/react';
import HistoryCard, {
  HistoryCardProps,
} from '@/composable/Card/History/HistoryCard';
import { backgroundColorVariants } from '@/styles/color.css';

const meta: Meta<typeof HistoryCard> = {
  title: 'Common/Card/HistoryCard',
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
      <HistoryCard.Company companyName="다이닝 코드" />
      <HistoryCard.Period period="2022.04 ~ 2023.06" />
    </HistoryCard>
  );
};

type Story = StoryObj<typeof HistoryCard>;

export const Large: Story = {
  args: {
    visible_status: 'VISIBLE',
    colorThemeToken: 'sungyeon',
    sizeToken: 'LARGE',
  },
  render: Template,
};

export const Small: Story = {
  args: {
    visible_status: 'VISIBLE',
    colorThemeToken: 'sungyeon',
    sizeToken: 'SMALL',
  },
  render: Template,
};

export default meta;