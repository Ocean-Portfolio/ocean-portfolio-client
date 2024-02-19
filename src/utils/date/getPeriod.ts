import { getISOArray } from './getISOArray';

export const getPeriod = (start: number, end: number, isCurrent?: boolean) => {
  const startDate = getISOArray(start);
  const endDate = getISOArray(end);
  return `${startDate[0]}.${startDate[1]} ~ ${
    isCurrent === true ? 'ing' : `${endDate[0]}.${endDate[1]}`
  }`;
};
