import { Meta, StoryObj } from '@storybook/react';
import { Suspense } from 'react';
import { StaticContextPageInfo } from '@/app/context';
import HistoryCarousel from '@/components/History/Carousel/HistoryCarousel';
import HistorySummary, {
  HistorySummaryProps,
} from '@/components/History/Summary/HistorySummary';
import { useReactiveLayout } from '@/hook/useReactiveLayout';
import { StaticContextUserAgent } from '@/Provider/StaticContextUserAgent.context';
import { getStaticContext } from '@/utils/context/StaticContext';

const Template = (args: HistorySummaryProps) => {
  const userAgent = getStaticContext(StaticContextUserAgent);
  const { isMobile } = useReactiveLayout(userAgent);
  return (
    <HistorySummary {...args}>
      {isMobile && (
        <HistorySummary.List>
          <Suspense fallback={<></>}>
            <CarouselTemplate />
          </Suspense>
        </HistorySummary.List>
      )}

      {!isMobile && <HistorySummary.Swipe />}
    </HistorySummary>
  );
};

const CarouselTemplate = () => {
  return (
    <HistoryCarousel
      data={[
        {
          detail: {
            title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트1',
            period: '2022.04 - 2023.06',
            position: '프론트엔드 개발자',
            content: `- 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n- 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n- PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n- 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n- 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
  `,
          },
          impact: [
            {
              before: '220만',
              after: '330만',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
          ],
        },
        {
          detail: {
            title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트2',
            period: '2022.04 - 2023.06',
            position: '프론트엔드 개발자',
            content: `- 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n- 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n- PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n- 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n- 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
    `,
          },
          impact: [
            {
              before: '220만',
              after: '330만',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
            {
              before: '100%',
              after: '200%',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
          ],
        },
        {
          detail: {
            title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트3',
            period: '2022.04 - 2023.06',
            position: '프론트엔드 개발자',
            content: `- 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n- 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n- PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n- 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n- 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
    `,
          },
          impact: [
            {
              before: '220만',
              after: '330만',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
            {
              before: '100%',
              after: '200%',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
          ],
        },
        {
          detail: {
            title: '다이닝 코드 웹 사이트 리뉴얼 프로젝트4',
            period: '2022.04 - 2023.06',
            position: '프론트엔드 개발자',
            content: `- 노후화된 레거시 웹 프론트엔드를 리뉴얼 하는 프로젝트를 설계 및 유지보수 하고 있습니다.\n- 프론트엔드 파트를 회사에서 혼자 담당하고있고, 중간중간 파트타임 인턴분들이 기여해가며 개발 진행하고 있습니다.\n- PC 환경과 Mobile 환경을 따로 구분하여 적응형으로 개발하고 있습니다.\n- 2년 6월 첫 릴리즈 이후 지속적인 업데이트 진행\n- 2022년 8월 MAU 220만 -> 2023년 3월  330만 까지 상승
    `,
          },
          impact: [
            {
              before: '220만',
              after: '330만',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
            {
              before: '100%',
              after: '200%',
              content: '웹 리뉴얼을 통한\nMAU 지수 상승',
            },
          ],
        },
      ]}
    />
  );
};

const meta: Meta<typeof Template> = {
  title: 'Components/History/Summary',
  component: Template,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

type Story = StoryObj<typeof Template>;
export const Default: Story = {
  args: {
    title: 'title',
    data: [
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
