import { ApolloClient } from '@apollo/client';
import { GET_KEYWORDS_BY_CATEGORY_ID } from '@/gql/queries/keyword';
import {
  GetKeywordsByCategoryIdQuery,
  GetKeywordsByCategoryIdQueryVariables,
} from '@/types/graphql';

export const getKeywordsByCategoryIdQueryList = (
  client: ApolloClient<unknown>,
  category_ids: number[],
) => {
  return Promise.all(
    category_ids.map((id) =>
      client.query<
        GetKeywordsByCategoryIdQuery,
        GetKeywordsByCategoryIdQueryVariables
      >({
        query: GET_KEYWORDS_BY_CATEGORY_ID,
        variables: {
          category_id: id,
        },
      }),
    ),
  );
};
