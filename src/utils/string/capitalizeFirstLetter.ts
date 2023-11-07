const capitalizeFirstLetter = (value: string) => {
  const lower = value.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export default capitalizeFirstLetter;
