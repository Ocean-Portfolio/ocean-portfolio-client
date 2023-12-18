import { gql } from '@apollo/client';

export const GET_SECTIONS_BY_USER_ID = gql`
  query GetSectionsByUserId($user_id: Float!) {
    getSectionsByUserId(user_id: $user_id) {
      id
      name
      sort_order
      section_type
    }
  }
`;
