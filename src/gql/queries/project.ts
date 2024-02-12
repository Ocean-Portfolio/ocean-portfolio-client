import { gql } from '@apollo/client';

export const GET_PROJECTS_BY_SECTION_ID = gql`
  query GetProjectsBySectionId($section_id: Float!) {
    getProjectsBySectionId(section_id: $section_id) {
      id
      mode
      name
      content
      date_type
      end_time
      start_date
      end_date
      mockup
      image_id
    }
  }
`;
