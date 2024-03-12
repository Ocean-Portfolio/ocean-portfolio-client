// GET_USER_BY_NAME

import { useSuspenseQuery } from '@apollo/client';
import { usePathname } from 'next/navigation';
import { GET_USER_BY_NAME } from '@/gql/queries/user';
import { getUserNameWithURL } from '@/helper/getUserNameWithURL';
import {
  GetUserByNameQuery,
  GetUserByNameQueryVariables,
} from '@/types/graphql';

export const useUserInfo = () => {
  const pathname = usePathname();
  const { data } = useSuspenseQuery<
    GetUserByNameQuery,
    GetUserByNameQueryVariables
  >(GET_USER_BY_NAME, {
    variables: {
      name: getUserNameWithURL(pathname),
    },
  });

  return data.getUserByName;
};
