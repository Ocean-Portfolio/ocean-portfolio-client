import { useMediaQuery } from 'react-responsive';

export const useODSBreakPoints = (): BreakPointsBoolean => {
  const breakpointS = useMediaQuery({ query: '(max-width: 599px)' });
  const breakpointM = useMediaQuery({ query: '(max-width: 839px)' });
  const breakpointL = useMediaQuery({ query: '(max-width: 1023px)' });
  const breakpointXL = useMediaQuery({ query: '(max-width: 1280px)' });
  const breakpointXXL = useMediaQuery({ query: '(max-width: 1535px)' });
  const breakpointFHD = useMediaQuery({ query: '(max-width: 1919px)' });

  return {
    breakpointS,
    breakpointM,
    breakpointL,
    breakpointXL,
    breakpointXXL,
    breakpointFHD,
  };
};
