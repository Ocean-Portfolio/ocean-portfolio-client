import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
  query GetSkills {
    getSkills {
      id
      name
      description
      visible_status
      created_at
      updated_at
      category_id
      image_id
    }
  }
`;
