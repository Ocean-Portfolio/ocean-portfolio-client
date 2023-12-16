import { ApolloClient } from '@apollo/client';
import { GET_USERS } from '@/gql/queries/user';
import { GetUsersQuery, GetUsersQueryVariables } from '@/types/graphql';

export const getUsersQuery = (client: ApolloClient<unknown>) => {
  return client.query<GetUsersQuery, GetUsersQueryVariables>({
    query: GET_USERS,
  });
};
