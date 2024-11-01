import { useEffect, useState } from 'react';

const useIsMobile = (width: number = 575): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(`(max-width: ${width}px)`).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mql = window.matchMedia(`(max-width: ${width}px)`);

    const handler = (matchMediaQuery: MediaQueryListEvent) => {
      setIsMobile(matchMediaQuery.matches);
    };

    // Safari < 14 fix
    if (mql.addEventListener) {
      mql.addEventListener('change', handler);
    } else {
      mql.addListener(handler);
    }

    return () => {
      // Safari < 14 fix
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, [width]);

  return isMobile;
};

export default useIsMobile;