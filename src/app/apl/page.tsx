'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import React from 'react';
import { GET_SKILLS } from '@/gql';

const Aplpage = () => {
  const { data } = useSuspenseQuery(GET_SKILLS);

  console.log(data);

  return (
    <div>
      <span>gggad</span>
      <p>asda</p>
    </div>
  );
};

export default Aplpage;
