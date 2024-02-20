export const getSlidesToShowWithBreakPoints = (
  breakPoint: keyof BreakPointsTokenInterface,
) => {
  switch (breakPoint) {
    case 'breakpoint-xl':
      return 2;
    case 'breakpoint-l':
      return 2;
    case 'breakpoint-m':
      return 2;
    case 'breakpoint-s':
      return 1;
    default:
      return 3;
  }
};
