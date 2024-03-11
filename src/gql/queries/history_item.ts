import { gql } from '@apollo/client';

export const GET_HISTORY_ITEM_BY_HISTORY_ID = gql`
  query GetHistoryItemByHistoryId($history_id: Float!) {
    getHistoryItemByHistoryId(history_id: $history_id) {
      id
      sort_order
      title
      position
      content
      date_type
      start_date
      end_date
      visible_status
    }
  }
`;
