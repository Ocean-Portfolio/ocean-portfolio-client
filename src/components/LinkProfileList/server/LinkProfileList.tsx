import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import LinkProfile from '@/components/LinkProfile/LinkProfile';
import { getImageByIdQuery } from '@/components/LinkProfileList/server/helper/getImageByIdQuery';
import { getSNSByUserIdQuery } from '@/components/LinkProfileList/server/helper/getSNSByUserIdQuery';
import { getProfileSocialData } from '@/helper/getProfileSocialData';
import { userDataSort } from '../helper/userDataSort';
import { getUsersQuery } from './helper/getUsersQuery';

const LinkProfileList = async () => {
  const apolloClient = getClient();
  const { data } = await getUsersQuery(apolloClient);

  return (
    <>
      {userDataSort(data).map((user) => {
        return (
          <LinkProfileList.Item
            key={user.id}
            user_id={user.id}
            name={user.name}
            job={user.job}
            image_id={user.image_id}
          />
        );
      })}
    </>
  );
};

const Item = async ({
  user_id,
  name,
  job,
  image_id,
}: LinkProfileListItemProps) => {
  const apolloClient = getClient();
  const resList = await Promise.all([
    getImageByIdQuery(apolloClient, image_id),
    getSNSByUserIdQuery(apolloClient, user_id),
  ]);

  const src = (resList[0] && resList[0].data.getImageById.storage_url) || '';
  const alt = (resList[0] && resList[0].data.getImageById.description) || '';

  const social = getProfileSocialData(resList[1].data.getSNSByUserId);
  return (
    <LinkProfile
      user_id={user_id}
      name={name}
      job={job}
      src={src}
      alt={alt}
      social={social}
    />
  );
};

LinkProfileList.Item = Item;

export default LinkProfileList;
