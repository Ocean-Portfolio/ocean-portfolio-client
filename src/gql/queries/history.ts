import { gql } from '@apollo/client';

export const GET_HISTORIES_BY_CATEGORY_ID = gql`
  query GetHistoriesByCategoryId($category_id: Float!) {
    getHistoriesByCategoryId(category_id: $category_id) {
      id
      sort_order
      title
      date_type
      end_time
      start_date
      end_date
      visible_status
    }
  }
`;
