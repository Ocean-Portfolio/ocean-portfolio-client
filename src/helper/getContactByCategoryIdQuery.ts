import { ApolloClient } from '@apollo/client';
import { GET_CONTACTS_BY_SECTION_ID } from '@/gql/queries/contact';
import {
  GetContactBySectionIdQuery,
  GetContactBySectionIdQueryVariables,
} from '@/types/graphql';

export const getContactBySectionIdQuery = (
  client: ApolloClient<unknown>,
  section_id: number,
) => {
  return client.query<
    GetContactBySectionIdQuery,
    GetContactBySectionIdQueryVariables
  >({
    query: GET_CONTACTS_BY_SECTION_ID,
    variables: {
      section_id,
    },
  });
};
