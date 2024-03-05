export const createNestedArray = <T>(arr: T[], perItems: number) => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += perItems) {
    result.push(arr.slice(i, i + perItems));
  }
  return result;
};
