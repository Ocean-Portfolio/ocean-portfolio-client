import { Meta, StoryObj } from '@storybook/react';
import HistoryDetailCard, {
  HistoryDetailCardProps,
} from '@/components/Card/History/Detail/HistoryDetailCard';

const Template = (args: HistoryDetailCardProps) => (
  <HistoryDetailCard {...args}>
    <HistoryDetailCard.Head />
    <HistoryDetailCard.Content />
  </HistoryDetailCard>
);

const meta: Meta<typeof HistoryDetailCard> = {
  title: 'Components/Card/History/Detail/HistoryDetailCard',
  component: Template,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof HistoryDetailCard>;
export const Large: Story = {
  args: {
    sizeToken: 'LARGE',
    title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트',
    period: '2022.04 - 2023.06',
    position: '프론트엔드 개발자',
    content: `- 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n- 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n- PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n- 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n- 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
    `,
  },
};

export const Small: Story = {
  args: {
    sizeToken: 'SMALL',
    title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트',
    period: '2022.04 - 2023.06',
    position: '프론트엔드 개발자',
    content: `1. 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n2. 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n3. PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n4. 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n5. 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
    `,
  },
};

export default meta;
