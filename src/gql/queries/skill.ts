import { gql } from '@apollo/client';

export const GET_SKILLS_BY_CATEGORY_ID = gql`
  query GetSkillsByCategoryId($category_id: Float!) {
    getSkillsByCategoryId(category_id: $category_id) {
      id
      sort_order
      name
      description
      visible_status
      updated_at
      category_id
      image_id
    }
  }
`;
