export const randomBetweenNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomIndex = <P>(arr: P[]) => {
  return randomBetweenNumber(0, arr.length - 1);
};
