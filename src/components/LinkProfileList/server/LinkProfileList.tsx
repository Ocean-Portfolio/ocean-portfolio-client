import React, { PropsWithChildren } from 'react';
import { getClient } from '@/apollo/apollo-client';
import LinkProfile from '@/components/LinkProfile/LinkProfile';
import { getImageByIdQuery } from '@/components/LinkProfileList/server/helper/getImageByIdQuery';
import { getSNSByUserIdQuery } from '@/components/LinkProfileList/server/helper/getSNSByUserIdQuery';
import { getProfileSocialData } from '@/helper/getProfileSocialData';
import { getStaticContext } from '@/utils/context/StaticContext';
import { userDataSort } from '../helper/userDataSort';
import { getUsersQuery } from './helper/getUsersQuery';
import StaticContextLinkProfileList from './LinkProfileList.context';

const LinkProfileList = async ({ children }: PropsWithChildren) => {
  const apolloClient = getClient();
  const { data } = await getUsersQuery(apolloClient);
  const sortedData = userDataSort(data);
  const resList = await Promise.all(
    sortedData.map((user) => {
      return Promise.all([
        getImageByIdQuery(apolloClient, user.image_id),
        getSNSByUserIdQuery(apolloClient, user.id),
      ]);
    }),
  );

  const ctxData = sortedData.map((user, index) => {
    const src = resList[index][0]?.data.getImageById.storage_url || '';
    const alt = resList[index][0]?.data.getImageById.description || '';

    const social = getProfileSocialData(resList[index][1].data.getSNSByUserId);

    return {
      user_id: user.id,
      name: user.name,
      job: user.job || '',
      image_id: user.image_id || 0,
      src,
      alt,
      social,
    };
  });

  return (
    <StaticContextLinkProfileList.Provider
      value={{
        ctxData,
      }}
    >
      {children}
    </StaticContextLinkProfileList.Provider>
  );
};

const List = () => {
  const { ctxData } = getStaticContext(StaticContextLinkProfileList);
  return (
    <>
      {ctxData.map((data) => (
        <LinkProfileList.Item
          key={data.user_id}
          user_id={data.user_id}
          name={data.name}
          job={data.job}
          src={data.src}
          alt={data.alt}
          social={data.social}
        />
      ))}
    </>
  );
};

LinkProfileList.List = List;
LinkProfileList.Item = LinkProfile;

export default LinkProfileList;
