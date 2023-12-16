import { GetUsersQuery } from '@/types/graphql';

export const userDataSort = (data: GetUsersQuery) => {
  return data.getUsers
    .map((elem) => elem)
    .sort((a, b) => Number(a.id) - Number(b.id));
};
