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

export const GET_SKILLS_BY_ID = gql`
  query GetSkillById($id: Float!) {
    getSkillById(id: $id) {
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
