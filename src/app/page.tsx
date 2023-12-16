import classNames from 'classnames';
import { getClient } from '@/apollo/apollo-client';
import ProfileList from '@/components/ProfileList/ProfileList';
import Container from '@/composable/Container/Container';
import Grid from '@/composable/Grid/Grid';
import { GET_USERS } from '@/gql/queries/user';
import {
  backgroundColorVariants,
  colorVariants,
} from '@/styles/common/color.css';
import { fontVariants } from '@/styles/common/font.css';
import { defaultColorTheme } from '@/styles/theme/default.css';
import { GetUsersQuery, GetUsersQueryVariables } from '@/types/graphql';
import { profileListStyle, titleStyle, wrapStyle } from './page.css';

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
      <h1
        className={classNames(
          titleStyle,
          fontVariants['display-l-bold'],
          colorVariants['gray-scale-00'],
        )}
      >
        Brand-ing Me: Ocean Portfolio
      </h1>

      <p
        className={classNames(
          fontVariants['display-m-bold'],
          colorVariants['secondary-variant'],
        )}
      >
        Makers
      </p>
      <Grid
        className={classNames(
          profileListStyle,
          backgroundColorVariants['secondary-variant'],
        )}
        templateColumns="repeat(3, 12.5rem)"
        templateRows="auto"
        justifyItems="center"
        alignItems="center"
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
      </Grid>
    </Container>
  );
}
