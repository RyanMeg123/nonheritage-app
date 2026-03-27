import { AppError, ErrorCode } from '../../errors.js';
import { findUserByPhone, updateUserSession } from '../../repositories/users.js';
import { createSessionToken, verifyPassword } from './credentials.js';
import { buildAuthPayload } from './shared.js';

export async function login({ phone, password }) {
  const user = await findUserByPhone(phone);

  if (!user?.passwordHash) {
    throw new AppError('手机号或密码不正确。', {
      statusCode: 401,
      code: ErrorCode.AUTH_INVALID,
    });
  }

  const matched = await verifyPassword(password, user.passwordHash);
  if (!matched) {
    throw new AppError('手机号或密码不正确。', {
      statusCode: 401,
      code: ErrorCode.AUTH_INVALID,
    });
  }

  const sessionToken = createSessionToken();
  const sessionIssuedAt = new Date();
  const nextUser = await updateUserSession(user.id, {
    sessionToken,
    sessionIssuedAt,
  });

  return buildAuthPayload(nextUser, sessionToken, 'login');
}
