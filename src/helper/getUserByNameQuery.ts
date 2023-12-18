import { ApolloClient } from '@apollo/client';
import { GET_USER_BY_NAME } from '@/gql/queries/user';
import {
  GetUserByNameQuery,
  GetUserByNameQueryVariables,
} from '@/types/graphql';

export const getUserByNameQuery = (
  client: ApolloClient<unknown>,
  name: UserKoreanNameToken,
) => {
  return client.query<GetUserByNameQuery, GetUserByNameQueryVariables>({
    query: GET_USER_BY_NAME,
    variables: {
      name,
    },
  });
};
