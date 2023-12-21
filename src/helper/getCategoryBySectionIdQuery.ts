import { ApolloClient } from '@apollo/client';
import { GET_CATEGORY_BY_SECTION_ID } from '@/gql/queries/category';
import {
  GetCategoryBySectionIdQuery,
  GetCategoryBySectionIdQueryVariables,
} from '@/types/graphql';

export const getCategoryBySectionIdQuery = (
  client: ApolloClient<unknown>,
  section_id: number,
) => {
  return client.query<
    GetCategoryBySectionIdQuery,
    GetCategoryBySectionIdQueryVariables
  >({
    query: GET_CATEGORY_BY_SECTION_ID,
    variables: {
      section_id,
    },
  });
};
