import AsyncStorage from '@react-native-async-storage/async-storage';

import type { AuthSession, StoredAuthSession } from '../../../types/auth';

const STORAGE_KEY = 'nonheritage.auth.session';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function isValidStoredSession(value: unknown): value is StoredAuthSession {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const session = value as Partial<StoredAuthSession>;
  return Boolean(
    session.user?.id &&
      session.user?.phone &&
      session.token &&
      session.expiresAt &&
      typeof session.expiresAt === 'string',
  );
}

export function createStoredSession(session: AuthSession): StoredAuthSession {
  return {
    ...session,
    expiresAt: new Date(Date.now() + SESSION_TTL_MS).toISOString(),
  };
}

export async function readStoredSession() {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!isValidStoredSession(parsed)) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      return null;
    }

    const expiresAt = Date.parse(parsed.expiresAt);
    if (!Number.isFinite(expiresAt) || Date.now() >= expiresAt) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return parsed;
  } catch {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export async function writeStoredSession(session: AuthSession) {
  const storedSession = createStoredSession(session);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storedSession));
  return storedSession;
}

export async function clearStoredSession() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
