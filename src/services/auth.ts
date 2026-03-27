import { request } from './api';
import type { AuthSession, PhoneCheckResult } from '../types/auth';

type AuthResponse = {
  user: AuthSession['user'];
  session: {
    token: string;
    loginMode: AuthSession['loginMode'];
  };
};

function mapAuthSession(response: AuthResponse): AuthSession {
  return {
    user: response.user,
    token: response.session.token,
    loginMode: response.session.loginMode,
  };
}

export const authApi = {
  phoneCheck: (phone: string) =>
    request<PhoneCheckResult>('/v1/auth/phone-check', {
      method: 'POST',
      body: JSON.stringify({ phone }),
    }),

  registerLogin: (payload: { phone: string; password: string; nickname?: string }) =>
    request<AuthResponse>('/v1/auth/register-login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(mapAuthSession),

  login: (payload: { phone: string; password: string }) =>
    request<AuthResponse>('/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(mapAuthSession),
};
