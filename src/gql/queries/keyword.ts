import { gql } from '@apollo/client';

export const GET_KEYWORDS_BY_CATEGORY_ID = gql`
  query GetKeywordsByCategoryId($category_id: Float!) {
    getKeywordsByCategoryId(category_id: $category_id) {
      id
      main_text
      description
      visible_status
      image_id
    }
  }
`;
