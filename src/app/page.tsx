import classNames from 'classnames';
import { getClient } from '@/apollo/apollo-client';
import ProfileList from '@/components/ProfileList/ProfileList';
import Container from '@/composable/Container/Container';
import { GET_USERS } from '@/gql/queries/user';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import { defaultColorTheme } from '@/styles/theme/default.css';
import { GetUsersQuery, GetUsersQueryVariables } from '@/types/graphql';
import {
  captionStyle,
  profileListStyle,
  titleStyle,
  wrapStyle,
} from './page.css';

export default async function Home() {
  const apolloClient = getClient();

  const getUsersQuery = await apolloClient.query<
    GetUsersQuery,
    GetUsersQueryVariables
  >({
    query: GET_USERS,
  });

  return (
    <Container
      as="main"
      className={classNames(
        defaultColorTheme,
        wrapStyle,
        backgroundColorVariants['tertiary'],
      )}
    >
      <h1 className={classNames(titleStyle, colorVariants['gray-scale-00'])}>
        Brand-ing Me
        <br />
        Ocean Portfolio
      </h1>
      <p
        className={classNames(captionStyle, colorVariants['secondary-variant'])}
      >
        Makers
      </p>
      <div
        className={classNames(
          profileListStyle,
          backgroundColorVariants['secondary-variant'],
        )}
      >
        {getUsersQuery.data.getUsers.map((user) => {
          return (
            <ProfileList
              key={user.id}
              user_id={user.id}
              name={user.name}
              job={user.job}
              image_id={user.image_id}
            />
          );
        })}
      </div>
    </Container>
  );
}
