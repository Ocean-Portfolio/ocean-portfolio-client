export const getISOArray = (date: number) => {
  const isoDate = new Date(date).toISOString();
  return isoDate.split('-');
};
