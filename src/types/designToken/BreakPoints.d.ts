interface BreakPointsTokenInterface {
  'breakpoint-s': 'screen and (max-width: 599px)';
  'breakpoint-m': 'screen and (max-width: 839px)';
  'breakpoint-l': 'screen and (max-width: 1023px)';
  'breakpoint-xl': 'screen and (max-width: 1280px)';
  'breakpoint-xxl': 'screen and (max-width: 1535px)';
  'breakpoint-FHD': 'screen and (max-width: 1919px)';
}

type BreakPointsToken = keyof BreakPointsTokenInterface;
interface BreakPointsBoolean {
  breakpointS: boolean;
  breakpointM: boolean;
  breakpointL: boolean;
  breakpointXL: boolean;
  breakpointXXL: boolean;
  breakpointFHD: boolean;
}
