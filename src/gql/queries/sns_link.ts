import { gql } from '@apollo/client';

export const GET_SNS_BY_USER_ID = gql`
  query GetSNSByUserId($id: Float!) {
    getSNSByUserId(user_id: $id) {
      id
      type
      link
      visible_status
    }
  }
`;
