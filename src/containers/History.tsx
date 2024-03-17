import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import { StaticContextPageInfo } from '@/app/context';
import History from '@/components/History/History';
import { SummaryData } from '@/components/History/History.context';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getHistoriesByCategoryIdQueryList } from '@/helper/getHistoriesByCategoryIdQuery';
import { getStaticContext } from '@/utils/context/StaticContext';
import { getPeriod } from '@/utils/date/getPeriod';

interface Props {
  section_id: number;
}

const HistoryContainer = async ({ section_id }: Props) => {
  const { userAgent } = getStaticContext(StaticContextPageInfo);

  const apolloClient = getClient();

  const categoryBySectionId = await getCategoryBySectionIdQuery(
    apolloClient,
    section_id,
  );

  const historyListData = await getHistoriesByCategoryIdQueryList(
    apolloClient,
    categoryBySectionId.data.getCategoryBySectionId.map((category) =>
      Number(category.id),
    ),
  );

  const historyList = historyListData.map((history) => {
    return history.data.getHistoriesByCategoryId.map((history) => {
      return history;
    });
  });

  const summaryData: SummaryData[] =
    categoryBySectionId.data.getCategoryBySectionId.map((category, idx) => {
      const histories = historyList[idx].map((history) => {
        return {
          id: history.id,
          companyName: history.title,
          period: getPeriod(
            Number(history.start_date),
            Number(history.end_date),
            history.end_time === 'CURRENT',
          ),
        };
      });
      return {
        ...category,
        histories,
      };
    });

  summaryData[0].histories.push(
    {
      id: '99',
      companyName: 'test',
      period: '2021-01 ~ 2021-02',
    },
    {
      id: '100',
      companyName: 'test',
      period: '2021-01 ~ 2021-02',
    },
    {
      id: '101',
      companyName: 'test',
      period: '2021-01 ~ 2021-02',
    },
  );

  return <History summary={summaryData} userAgent={userAgent} />;
};

export default HistoryContainer;
