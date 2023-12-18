import { gql } from '@apollo/client';

export const GET_INTRODUCES_BY_SECTION_ID = gql`
  query GetIntroducesBySectionId($section_id: Float!) {
    getIntroducesBySectionId(section_id: $section_id) {
      id
      slogan
      intro_text
      visible_status
      image_id
    }
  }
`;
