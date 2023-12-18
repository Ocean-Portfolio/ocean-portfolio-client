import { ApolloClient } from '@apollo/client';
import { GET_IMAGE_BY_ID } from '@/gql/queries/image';
import { GetImageByIdQuery, GetImageByIdQueryVariables } from '@/types/graphql';

export const getImageByIdQuery = (
  client: ApolloClient<unknown>,
  image_id?: number | null,
) => {
  console.log(image_id, 'image_id');
  if (!image_id) return;

  return client.query<GetImageByIdQuery, GetImageByIdQueryVariables>({
    query: GET_IMAGE_BY_ID,
    variables: {
      id: image_id,
    },
  });
};
