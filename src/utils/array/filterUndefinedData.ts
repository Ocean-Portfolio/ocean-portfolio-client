export function filterUndefinedData<P>(data: P[]) {
  return data.filter((item) => typeof item !== 'undefined') as NonNullable<P>[];
}
