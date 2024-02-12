import { ApolloClient } from '@apollo/client';
import { GET_PROJECTS_BY_SECTION_ID } from '@/gql/queries/project';
import {
  GetProjectsBySectionIdQuery,
  GetProjectsBySectionIdQueryVariables,
} from '@/types/graphql';

export const getProjectsBySectionIdQuery = (
  client: ApolloClient<unknown>,
  section_id: number,
) => {
  return client.query<
    GetProjectsBySectionIdQuery,
    GetProjectsBySectionIdQueryVariables
  >({
    query: GET_PROJECTS_BY_SECTION_ID,
    variables: {
      section_id,
    },
  });
};
