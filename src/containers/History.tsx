import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import History from '@/components/History/History';
import { SummaryData } from '@/components/History/History.context';
import { getCategoryBySectionIdQuery } from '@/helper/getCategoryBySectionIdQuery';
import { getHistoriesByCategoryIdQueryList } from '@/helper/getHistoriesByCategoryIdQuery';
import { getPeriod } from '@/utils/date/getPeriod';

interface Props {
  section_id: number;
}

const HistoryContainer = async ({ section_id }: Props) => {
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
          ),
        };
      });
      return {
        ...category,
        histories,
      };
    });

  return <History summary={summaryData} />;
};

export default HistoryContainer;
