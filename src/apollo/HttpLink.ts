import { HttpLink } from '@apollo/client';

export default new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_LOCALHOST}/graphql`
      : `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});
