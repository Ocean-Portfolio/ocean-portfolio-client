import classNames from 'classnames';
import { getClient } from '@/apollo/apollo-client';
import Profile from '@/components/Profile/Profile';
import Container from '@/composable/Container/Container';
import { GET_IMAGE_BY_ID } from '@/gql/queries/image';
import { GET_SNS_BY_USER_ID } from '@/gql/queries/sns_link';
import { GET_USERS } from '@/gql/queries/user';
import { defaultColorTheme } from '@/styles/theme/default.css';
import {
  GetImageByIdQuery,
  GetImageByIdQueryVariables,
  GetSnsByUserIdQuery,
  GetSnsByUserIdQueryVariables,
  GetUsersQuery,
  GetUsersQueryVariables,
} from '@/types/graphql';
import capitalizeFirstLetter from '@/utils/string/capitalizeFirstLetter';

export default async function Home() {
  const apolloClient = getClient();

  const getUsersQuery = await apolloClient.query<
    GetUsersQuery,
    GetUsersQueryVariables
  >({
    query: GET_USERS,
  });

  return (
    <main className={classNames(defaultColorTheme)}>
      <Container>
        {getUsersQuery.data.getUsers.map((user) => {
          return (
            <HomeProfile
              key={user.id}
              user_id={user.id}
              name={user.name}
              job={user.job}
              image_id={user.image_id}
            />
          );
        })}
      </Container>
    </main>
  );
}

interface Props {
  user_id: string;
  name: string;
  job?: string | null;
  image_id?: number | null;
}

const HomeProfile = async ({ user_id, name, job, image_id }: Props) => {
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

  return (
    <Profile
      layout="VERTICAL"
      src={(res[0] && res[0].data.getImageById.storage_url) || ''}
      alt={(res[0] && res[0].data.getImageById.description) || ''}
      name={name}
      job={job || ''}
      social={res[1].data.getSNSByUserId
        .filter((sns) => sns.visible_status !== 'NONE')
        .map((sns) => {
          return {
            company: capitalizeFirstLetter(sns.type) as CompanyIconToken,
            color: 'GRAY',
            background: 'NONE',
            state: 'DEFAULT',
            url: sns.link,
          };
        })}
    />
  );
};
