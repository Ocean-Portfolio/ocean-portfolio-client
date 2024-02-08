import { gql } from '@apollo/client';

export const GET_CONTACTS_BY_SECTION_ID = gql`
  query GetContactBySectionId($section_id: Float!) {
    getContactBySectionId(section_id: $section_id) {
      id
      email
      email_description
      visible_status
      section_id
    }
  }
`;
