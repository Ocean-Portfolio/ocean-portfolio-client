import { ApolloClient } from '@apollo/client';
import { GET_IMAGE_BY_ID } from '@/gql/queries/image';
import { GetImageByIdQuery, GetImageByIdQueryVariables } from '@/types/graphql';

export const getImageByIdQuery = (
  client: ApolloClient<unknown>,
  image_id?: number | null,
) => {
  if (!image_id) return;

  return client.query<GetImageByIdQuery, GetImageByIdQueryVariables>({
    query: GET_IMAGE_BY_ID,
    variables: {
      id: image_id,
    },
  });
};

export const getImageByIdQueryList = (
  client: ApolloClient<unknown>,
  image_id_list: number[],
) => {
  return Promise.all(
    image_id_list.map((image_id) => getImageByIdQuery(client, image_id)),
  );
};
