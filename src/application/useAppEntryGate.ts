import { useEffect, useState } from 'react';

import type { AppScreen } from '../types';

export function useAppEntryGate({
  screen,
  goTo,
  splashFinished,
  isSessionHydrated,
  hasValidSession,
}: {
  screen: AppScreen;
  goTo: (next: AppScreen) => void;
  splashFinished: boolean;
  isSessionHydrated: boolean;
  hasValidSession: boolean;
}) {
  const [hasEnteredApp, setHasEnteredApp] = useState(false);

  useEffect(() => {
    if (hasEnteredApp) {
      return;
    }

    if (!splashFinished || !isSessionHydrated) {
      return;
    }

    const entryScreen = hasValidSession ? 'home' : 'auth';

    if (screen !== entryScreen) {
      goTo(entryScreen);
      return;
    }

    setHasEnteredApp(true);
  }, [
    goTo,
    hasEnteredApp,
    hasValidSession,
    isSessionHydrated,
    screen,
    splashFinished,
  ]);

  useEffect(() => {
    if (hasEnteredApp) {
      return;
    }

    if (!splashFinished) {
      return;
    }

    if (!isSessionHydrated) {
      return;
    }

    if ((hasValidSession && screen === 'home') || (!hasValidSession && screen === 'auth')) {
      setHasEnteredApp(true);
    }
  }, [hasEnteredApp, hasValidSession, isSessionHydrated, screen, splashFinished]);

  return {
    showSplash: !hasEnteredApp,
  };
}
