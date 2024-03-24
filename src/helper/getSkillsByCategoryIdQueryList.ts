import { ApolloClient } from '@apollo/client';
import { GET_SKILLS_BY_CATEGORY_ID } from '@/gql/queries/skill';
import {
  GetSkillsByCategoryIdQuery,
  GetSkillsByCategoryIdQueryVariables,
} from '@/types/graphql';

export const getSkillsByCategoryIdQueryList = (
  client: ApolloClient<unknown>,
  category_ids: number[],
) => {
  return Promise.all(
    category_ids.map((id) =>
      client.query<
        GetSkillsByCategoryIdQuery,
        GetSkillsByCategoryIdQueryVariables
      >({
        query: GET_SKILLS_BY_CATEGORY_ID,
        variables: {
          category_id: id,
        },
      }),
    ),
  );
};
