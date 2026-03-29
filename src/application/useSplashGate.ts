import { useEffect, useState } from 'react';

import { SPLASH_DURATION_MS } from './splashTiming';

export function useSplashGate() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  return {
    isFinished,
  };
}
