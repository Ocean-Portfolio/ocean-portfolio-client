import { getCurrentBreakPoints } from '../../utils/layout/getCurrentBreakPoints';

export const getButtonPositionWithBreakPoints = (
  breakPoints: BreakPointsBoolean,
) => {
  const currentBreakPoints = getCurrentBreakPoints(breakPoints);
  switch (currentBreakPoints) {
    case 'breakpoint-m':
      return 38;
    case 'breakpoint-l':
      return 48;
    case 'breakpoint-xl':
      return 48;
    case 'breakpoint-xxl':
      return 60;
    default:
      return 80;
  }
};
