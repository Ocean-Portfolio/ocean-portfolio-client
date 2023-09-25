import { HttpLink } from '@apollo/client';

export default new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});
