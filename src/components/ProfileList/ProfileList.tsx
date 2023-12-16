import classNames from 'classnames';
import Link from 'next/link';
import { getClient } from '@/apollo/apollo-client';
import { GET_IMAGE_BY_ID } from '@/gql/queries/image';
import { GET_SNS_BY_USER_ID } from '@/gql/queries/sns_link';
import { getProlfileSocialData } from '@/helper/getProfileSocialData';
import { backgroundColorVariants } from '@/styles/common/color.css';
import {
  GetImageByIdQuery,
  GetImageByIdQueryVariables,
  GetSnsByUserIdQuery,
  GetSnsByUserIdQueryVariables,
} from '@/types/graphql';
import Profile from '../Profile/Profile';
import { userPageWithId } from './helper/userPageWithId';
import { linkStyle, wrapStyle } from './ProfileList.css';

interface Props {
  user_id: string;
  name: string;
  job?: string | null;
  image_id?: number | null;
}

const ProfileList = async ({ user_id, name, job, image_id }: Props) => {
  const apolloClient = getClient();

  const res = await Promise.all([
    image_id &&
      apolloClient.query<GetImageByIdQuery, GetImageByIdQueryVariables>({
        query: GET_IMAGE_BY_ID,
        variables: {
          id: image_id,
        },
      }),
    apolloClient.query<GetSnsByUserIdQuery, GetSnsByUserIdQueryVariables>({
      query: GET_SNS_BY_USER_ID,
      variables: {
        id: Number(user_id),
      },
    }),
  ]);

  const src = (res[0] && res[0].data.getImageById.storage_url) || '';
  const alt = (res[0] && res[0].data.getImageById.description) || '';

  const social = getProlfileSocialData(res[1].data.getSNSByUserId);

  return (
    <div
      className={classNames(
        wrapStyle,
        backgroundColorVariants['gray-scale-00'],
      )}
    >
      <Profile
        layout="VERTICAL"
        src={src}
        alt={alt}
        name={name}
        job={job || ''}
        social={social}
      />
      <Link className={linkStyle} href={userPageWithId(Number(user_id))} />
    </div>
  );
};

export default ProfileList;
