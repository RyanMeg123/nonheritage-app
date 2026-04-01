import { useCallback, useMemo, useState } from 'react';

import type { AppScreen } from '../../../types';
import { useAuthSession } from './useAuthSession';

export function useAuthFlow({
  goTo,
  sessionEnabled = true,
}: {
  goTo: (next: AppScreen) => void;
  sessionEnabled?: boolean;
}) {
  const authSession = useAuthSession({ enabled: sessionEnabled });
  const [authBackScreen, setAuthBackScreen] = useState<AppScreen>('home');

  const openAuthScreen = useCallback(
    (backScreen: AppScreen = 'home') => {
      setAuthBackScreen(backScreen);
      goTo('auth');
    },
    [goTo],
  );

  const handleAuthSuccess = useCallback(() => {
    goTo(authBackScreen);
  }, [authBackScreen, goTo]);

  const handleDeleteAccount = useCallback(async () => {
    await authSession.deleteAccount();
  }, [authSession]);

  const navigatorProps = useMemo(
    () => ({
      authLoadingStage: authSession.loadingStage,
      onCheckPhone: authSession.checkPhone,
      onRegisterLogin: authSession.registerLogin,
      onLogin: authSession.login,
      onAuthSuccess: handleAuthSuccess,
      onDeleteAccount: handleDeleteAccount,
      onReturnToAuth: () => goTo('auth'),
    }),
    [
      authSession.checkPhone,
      authSession.deleteAccount,
      authSession.loadingStage,
      authSession.login,
      authSession.registerLogin,
      goTo,
      handleDeleteAccount,
      handleAuthSuccess,
    ],
  );

  return {
    currentUserId: authSession.session?.user.id,
    session: authSession.session,
    isHydrated: authSession.isHydrated,
    openAuthScreen,
    navigatorProps,
  };
}
