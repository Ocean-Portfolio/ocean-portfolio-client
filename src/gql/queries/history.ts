import { gql } from '@apollo/client';

export const GET_HISTORIES_BY_CATEGORY_ID = gql`
  query GetHistoriesByCategoryId($category_id: Float!) {
    getHistoriesByCategoryId(category_id: $category_id) {
      id
      title
      position
      start_date
      end_date
      visible_status
    }
  }
`;
