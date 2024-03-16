import { useEffect, useState } from 'react';
import { useODSBreakPoints } from './useODSBreakPoints';

export const useReactiveLayout = (ua: UAParser.IResult) => {
  const {
    breakpointS,
    breakpointM,
    breakpointL,
    breakpointXL,
    breakpointXXL,
    breakpointFHD,
  } = useODSBreakPoints();
  const [isMobile, setIsMobile] = useState(
    ua.device?.type === 'mobile' || false,
  );

  useEffect(() => {
    if (breakpointS === true) setIsMobile(true);
    else setIsMobile(false);
  }, [breakpointS]);

  return {
    isMobile,
    breakpointS,
    breakpointM,
    breakpointL,
    breakpointXL,
    breakpointXXL,
    breakpointFHD,
  };
};
