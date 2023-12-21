import classNames from 'classnames';
import React from 'react';
import { getClient } from '@/apollo/apollo-client';
import Contents from '@/components/Sections/Contents';
import Container from '@/composable/Container/Container';
import { getSectionsByUserIdQuery } from '@/helper/getSectionByUserIdQuery';
import { getUserByNameQuery } from '@/helper/getUserByNameQuery';
import { backgroundColorVariants } from '@/styles/common/color.css';
import { sungyeonColorTheme } from '@/styles/theme/sungyeon.css';
import { StaticContextPageInfo } from './context';

const Sungyeon = async () => {
  const apolloClient = getClient();
  const userByName = await getUserByNameQuery(apolloClient, '윤성연');
  const sectionByUserId = await getSectionsByUserIdQuery(
    apolloClient,
    Number(userByName.data.getUserByName.id),
  );

  const { getUserByName } = userByName.data;
  const { getSectionsByUserId } = sectionByUserId.data;

  return (
    <StaticContextPageInfo.Provider
      value={{
        userInfo: {
          id: getUserByName.id,
          name: getUserByName.name,
          email: getUserByName.email,
          job: getUserByName.job,
          image_id: getUserByName.image_id,
        },
        sections: getSectionsByUserId,
      }}
    >
      <Container
        as="main"
        className={classNames(
          sungyeonColorTheme,
          backgroundColorVariants['primary'],
        )}
      >
        <Contents />
      </Container>
    </StaticContextPageInfo.Provider>
  );
};

export default Sungyeon;
