import { ApolloClient } from '@apollo/client';
import { GET_INTRODUCES_BY_SECTION_ID } from '@/gql/queries/introduce';
import {
  GetIntroducesBySectionIdQuery,
  GetIntroducesBySectionIdQueryVariables,
} from '@/types/graphql';

export const getIntroducesBySectionIdQuery = (
  client: ApolloClient<unknown>,
  section_id: number,
) => {
  return client.query<
    GetIntroducesBySectionIdQuery,
    GetIntroducesBySectionIdQueryVariables
  >({
    query: GET_INTRODUCES_BY_SECTION_ID,
    variables: {
      section_id,
    },
  });
};
