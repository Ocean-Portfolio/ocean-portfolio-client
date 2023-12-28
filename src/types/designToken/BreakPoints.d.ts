interface BreakPointsTokenInterface {
  'breakpoint-s': 'screen and (max-width: 599px)';
  'breakpoint-m': 'screen and (max-width: 839px)';
  'breakpoint-l': 'screen and (max-width: 1023px)';
  'breakpoint-xl': 'screen and (max-width: 1280px)';
}

type BreakPointsToken =
  | 'breakpoint-s'
  | 'breakpoint-m'
  | 'breakpoint-l'
  | 'breakpoint-xl';
