import { GetUserByNameQuery } from '@/types/graphql';
import { createStaticContext } from '@/utils/context/StaticContext';

type Data = GetUserByNameQuery['getUserByName'];

interface Context extends Data {
  name: UserNameToken;
}

export const StaticContextUserInfo = createStaticContext<Context>({
  id: '',
  name: 'sungyeon',
  email: '',
});
