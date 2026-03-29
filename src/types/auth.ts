export type AuthUser = {
  id: string;
  phone: string;
  nickname: string | null;
};

export type AuthSession = {
  user: AuthUser;
  token: string;
  loginMode: 'register' | 'login';
};

export type StoredAuthSession = AuthSession & {
  expiresAt: string;
};

export type PhoneCheckResult = {
  phone: string;
  exists: boolean;
  nextAction: 'register-login' | 'login';
};
