export const craeteQueryResource = <
  TData = unknown,
  TVariables = QueryVariables,
>(
  options: QueryResourceOptions<TData, TVariables>,
): QueryResource<TData, TVariables> => {
  return {
    options,
    queryType: {} as TData,
    variableType: {} as TVariables,
  };
};
