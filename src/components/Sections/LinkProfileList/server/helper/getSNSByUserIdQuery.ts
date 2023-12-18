import { ApolloClient } from '@apollo/client';
import { GET_SNS_BY_USER_ID } from '@/gql/queries/sns_link';
import {
  GetSnsByUserIdQuery,
  GetSnsByUserIdQueryVariables,
} from '@/types/graphql';

export const getSNSByUserIdQuery = (
  client: ApolloClient<unknown>,
  user_id: string,
) => {
  return client.query<GetSnsByUserIdQuery, GetSnsByUserIdQueryVariables>({
    query: GET_SNS_BY_USER_ID,
    variables: {
      id: Number(user_id),
    },
  });
};
