const convToPascaleCase = (str: string) => {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

export default convToPascaleCase;
