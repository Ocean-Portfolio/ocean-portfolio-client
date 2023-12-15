import { gql } from '@apollo/client';

export const GET_IMAGE_BY_ID = gql`
  query GetImageById($id: Float!) {
    getImageById(id: $id) {
      id
      name
      storage_url
      description
    }
  }
`;
