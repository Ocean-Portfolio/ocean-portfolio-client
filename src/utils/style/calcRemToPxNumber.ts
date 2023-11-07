const calcRemToPxNumber = (remStyleValue: string) => {
  return Number(remStyleValue.split('rem')[0]) * 16;
};

export default calcRemToPxNumber;
