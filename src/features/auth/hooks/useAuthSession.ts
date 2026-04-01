import { useCallback, useEffect, useState } from 'react';

import { authApi } from '../../../services/auth';
import { ApiRequestError } from '../../../services/api';
import type { AuthSession, PhoneCheckResult, StoredAuthSession } from '../../../types/auth';
import {
  clearStoredSession,
  readStoredSession,
  writeStoredSession,
} from '../storage/sessionStorage';

export type AuthLoadingStage =
  | 'hydrating'
  | 'idle'
  | 'checking-phone'
  | 'registering'
  | 'logging-in'
  | 'deleting-account';

export function useAuthSession({ enabled = true }: { enabled?: boolean } = {}) {
  const [session, setSession] = useState<StoredAuthSession | null>(null);
  const [loadingStage, setLoadingStage] = useState<AuthLoadingStage>(
    enabled ? 'hydrating' : 'idle',
  );

  useEffect(() => {
    if (!enabled) {
      setLoadingStage('idle');
      return;
    }

    let active = true;
    setLoadingStage('hydrating');

    async function loadSession() {
      try {
        const storedSession = await readStoredSession();
        if (!active) {
          return;
        }

        setSession(storedSession);
      } finally {
        if (active) {
          setLoadingStage('idle');
        }
      }
    }

    void loadSession();

    return () => {
      active = false;
    };
  }, [enabled]);

  const persistSession = useCallback(async (nextSession: AuthSession) => {
    const storedSession = await writeStoredSession(nextSession);
    setSession(storedSession);
    return storedSession;
  }, []);

  const checkPhone = useCallback(async (phone: string) => {
    try {
      setLoadingStage('checking-phone');
      return await authApi.phoneCheck(phone);
    } finally {
      setLoadingStage('idle');
    }
  }, []);

  const registerLogin = useCallback(
    async ({ phone, password }: { phone: string; password: string }) => {
      try {
        setLoadingStage('registering');
        const nextSession = await authApi.registerLogin({ phone, password });
        return await persistSession(nextSession);
      } finally {
        setLoadingStage('idle');
      }
    },
    [persistSession],
  );

  const login = useCallback(
    async ({ phone, password }: { phone: string; password: string }) => {
      try {
        setLoadingStage('logging-in');
        const nextSession = await authApi.login({ phone, password });
        return await persistSession(nextSession);
      } finally {
        setLoadingStage('idle');
      }
    },
    [persistSession],
  );

  const clearSession = useCallback(async () => {
    setSession(null);
    await clearStoredSession();
  }, []);

  const deleteAccount = useCallback(async () => {
    if (!session?.token) {
      throw new Error('当前登录状态已失效，请重新登录后再试。');
    }

    try {
      setLoadingStage('deleting-account');
      await authApi.deleteAccount(session.token);
      setSession(null);
      await clearStoredSession();
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 401) {
        setSession(null);
        await clearStoredSession();
      }

      throw error;
    } finally {
      setLoadingStage('idle');
    }
  }, [session?.token]);

  return {
    session,
    loadingStage,
    isHydrated: enabled ? loadingStage !== 'hydrating' : false,
    checkPhone,
    registerLogin,
    login,
    clearSession,
    deleteAccount,
  };
}
