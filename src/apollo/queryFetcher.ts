import { getClient } from './apollo-client';

export const queryFetcher = async <P extends QueryResource>({
  options,
  queryType,
  variableType,
}: P) => {
  const client = getClient();
  return client.query<typeof queryType, typeof variableType>(options);
};

export const queryListFetcher = async (resources: QueryResource[]) => {
  const client = getClient();
  const promises = resources.map((resource) => client.query(resource));
  return Promise.all(promises);
};
