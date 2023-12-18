import { HttpLink } from '@apollo/client';
import { isDevelopment } from '@/const/isDevelopment';

export default new HttpLink({
  uri: `${
    isDevelopment
      ? process.env.NEXT_PUBLIC_LOCALHOST
      : process.env.NEXT_PUBLIC_API_URL
  }/graphql`,
});
