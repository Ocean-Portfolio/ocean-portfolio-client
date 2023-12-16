'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react';
import LinkProfile from '@/components/LinkProfile/LinkProfile';
import { GET_IMAGE_BY_ID } from '@/gql/queries/image';
import { GET_SNS_BY_USER_ID } from '@/gql/queries/sns_link';
import { GET_USERS } from '@/gql/queries/user';
import { getProfileSocialData } from '@/helper/getProfileSocialData';
import {
  GetImageByIdQuery,
  GetImageByIdQueryVariables,
  GetSnsByUserIdQuery,
  GetSnsByUserIdQueryVariables,
  GetUsersQuery,
} from '@/types/graphql';
import { userDataSort } from '../helper/userDataSort';

const LinkProfileList = () => {
  const { data } = useQuery<GetUsersQuery>(GET_USERS);

  if (!data) return null;

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

const Item = ({ user_id, name, job, image_id }: LinkProfileListItemProps) => {
  const imageRes = useQuery<GetImageByIdQuery, GetImageByIdQueryVariables>(
    GET_IMAGE_BY_ID,
    {
      variables: { id: image_id || 0 },
    },
  );

  const snsRes = useQuery<GetSnsByUserIdQuery, GetSnsByUserIdQueryVariables>(
    GET_SNS_BY_USER_ID,
    {
      variables: { id: Number(user_id) },
    },
  );

  const src = (imageRes.data && imageRes.data.getImageById.storage_url) || '';
  const alt = (imageRes.data && imageRes.data.getImageById.description) || '';

  const social = getProfileSocialData(snsRes.data?.getSNSByUserId || []);

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
