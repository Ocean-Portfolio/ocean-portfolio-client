import { ODSBreakPointTokenKeyVariables } from '@/const/breakpoints';

export const getCurrentBreakPoints = (
  breakPoints: BreakPointsBoolean,
): BreakPointsToken => {
  if (breakPoints.breakpointS)
    return ODSBreakPointTokenKeyVariables['breakpoint-s'];
  if (breakPoints.breakpointM)
    return ODSBreakPointTokenKeyVariables['breakpoint-m'];
  if (breakPoints.breakpointL)
    return ODSBreakPointTokenKeyVariables['breakpoint-l'];
  if (breakPoints.breakpointXL)
    return ODSBreakPointTokenKeyVariables['breakpoint-xl'];
  if (breakPoints.breakpointXXL)
    return ODSBreakPointTokenKeyVariables['breakpoint-xxl'];
  return 'breakpoint-FHD';
};
