'use client';

import { useSuspenseQuery } from '@apollo/client';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';
import { GET_USER_BY_NAME } from '@/gql/queries/user';
import { getUserNameWithURL } from '@/helper/getUserNameWithURL';
import {
  GetUserByNameQuery,
  GetUserByNameQueryVariables,
} from '@/types/graphql';
import { StaticContextUserInfo } from './UserInfoProvider.context';

const UserInfoProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { data } = useSuspenseQuery<
    GetUserByNameQuery,
    GetUserByNameQueryVariables
  >(GET_USER_BY_NAME, {
    variables: {
      name: getUserNameWithURL(pathname),
    },
  });

  return (
    <StaticContextUserInfo.Provider
      value={{
        ...data.getUserByName,
        name: (pathname?.replace('/', '') as UserNameToken) || 'sungyeon',
      }}
    >
      {children}
    </StaticContextUserInfo.Provider>
  );
};

export default UserInfoProvider;
