import { gql } from '@apollo/client';

export const GET_CATEGORY_BY_SECTION_ID = gql`
  query GetCategoryBySectionId($section_id: Float!) {
    getCategoryBySectionId(section_id: $section_id) {
      id
      name
      visible_status
    }
  }
`;
