import { startTransition, useCallback, useState } from 'react';

import type { AppScreen, MainTabId } from '../types';

export function useAppNavigation(initialScreen: AppScreen = 'home') {
  const [screen, setScreen] = useState<AppScreen>(initialScreen);

  const goTo = useCallback((next: AppScreen) => {
    startTransition(() => setScreen(next));
  }, []);

  const goToTab = useCallback(
    (tabId: MainTabId) => {
      const map: Record<MainTabId, AppScreen> = {
        home: 'home',
        custom: 'publish',
        chat: 'chat',
        mine: 'profile',
      };

      goTo(map[tabId] ?? 'home');
    },
    [goTo],
  );

  return {
    screen,
    goTo,
    goToTab,
  };
}
