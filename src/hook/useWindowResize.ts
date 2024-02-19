import { useEffect, useState } from 'react';

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<WindowBasedPoints>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    };

    typeof window !== 'undefined' &&
      window.addEventListener('resize', handleResize);
    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};
