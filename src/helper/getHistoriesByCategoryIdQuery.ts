import { ApolloClient } from '@apollo/client';
import { GET_HISTORIES_BY_CATEGORY_ID } from '@/gql/queries/history';
import {
  GetHistoriesByCategoryIdQuery,
  GetHistoriesByCategoryIdQueryVariables,
} from '@/types/graphql';

export const getHistoriesByCategoryIdQueryList = (
  client: ApolloClient<unknown>,
  category_ids: number[],
) => {
  return Promise.all(
    category_ids.map((id) =>
      client.query<
        GetHistoriesByCategoryIdQuery,
        GetHistoriesByCategoryIdQueryVariables
      >({
        query: GET_HISTORIES_BY_CATEGORY_ID,
        variables: {
          category_id: id,
        },
      }),
    ),
  );
};
