export const getCardWidthWithBreakPoints = (
  breakPoint: keyof BreakPointsTokenInterface,
) => {
  switch (breakPoint) {
    case 'breakpoint-l':
      return `${22.5 + 1.5}rem`;
    case 'breakpoint-m':
      return `${17.5 + 1.5}rem`;
    case 'breakpoint-s':
      return `${17.5 + 0.75}rem`;
    default:
      return `${25.5 + 1.5}rem`;
  }
};
