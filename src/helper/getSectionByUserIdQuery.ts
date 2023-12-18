import { ApolloClient } from '@apollo/client';
import { GET_SECTIONS_BY_USER_ID } from '@/gql/queries/section';
import {
  GetSectionsByUserIdQuery,
  GetSectionsByUserIdQueryVariables,
} from '@/types/graphql';

type OriginDTO = GetSectionsByUserIdQuery['getSectionsByUserId'][0];

type SectionDTO = Omit<OriginDTO, 'section_type'> & {
  section_type: SectionTypeToken;
};

interface GetSectionsByUserIdQueryWithEnum {
  getSectionsByUserId: Array<SectionDTO>;
}

export const getSectionsByUserIdQuery = (
  client: ApolloClient<unknown>,
  user_id: number,
) => {
  return client.query<
    GetSectionsByUserIdQueryWithEnum,
    GetSectionsByUserIdQueryVariables
  >({
    query: GET_SECTIONS_BY_USER_ID,
    variables: {
      user_id,
    },
  });
};
