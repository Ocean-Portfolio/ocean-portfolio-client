'use client';

import { useSuspenseQuery } from '@apollo/client';
import { useContext } from 'react';
import HistoryCarousel from '@/components/History/Carousel/HistoryCarousel';
import { ValueContextHistory } from '@/components/History/History.context';
import { GET_HISTORY_ITEM_BY_HISTORY_ID } from '@/gql/queries/history_item';
import {
  GetHistoryItemByHistoryIdQuery,
  GetHistoryItemByHistoryIdQueryVariables,
} from '@/types/graphql';
import { getPeriod } from '@/utils/date/getPeriod';

const HistoryCarouselContainer = () => {
  const { page, state } = useContext(ValueContextHistory);

  const historyItemQuery = useSuspenseQuery<
    GetHistoryItemByHistoryIdQuery,
    GetHistoryItemByHistoryIdQueryVariables
  >(GET_HISTORY_ITEM_BY_HISTORY_ID, {
    variables: {
      history_id: Number(state[page].id),
    },
  });

  const data = historyItemQuery.data.getHistoryItemByHistoryId.map(
    (historyItem) => {
      return {
        detail: {
          title: historyItem.title,
          period: getPeriod(
            Number(historyItem.start_date),
            Number(historyItem.end_date),
          ),
          position: historyItem.position,
          content: historyItem.content,
        },
        impact: historyItem.impacts.map((impact) => {
          return {
            before: impact.before,
            after: impact.after,
            content: impact.content,
          };
        }),
      };
    },
  );
  return <HistoryCarousel data={data} />;
};

export default HistoryCarouselContainer;
