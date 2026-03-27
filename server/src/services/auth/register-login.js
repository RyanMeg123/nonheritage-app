import { AppError, ErrorCode } from '../../errors.js';
import { createUserWithPhone, findUserByPhone } from '../../repositories/users.js';
import { createSessionToken, hashPassword } from './credentials.js';
import { buildAuthPayload, createDefaultNickname } from './shared.js';

export async function registerLogin({ phone, password, nickname }) {
  const existing = await findUserByPhone(phone);
  if (existing) {
    throw new AppError('该手机号已经注册，请直接输入密码登录。', {
      statusCode: 409,
      code: ErrorCode.CONFLICT,
      details: { field: 'phone' },
    });
  }

  const sessionToken = createSessionToken();
  const sessionIssuedAt = new Date();
  const user = await createUserWithPhone({
    phone,
    nickname: nickname?.trim() || createDefaultNickname(phone),
    passwordHash: await hashPassword(password),
    sessionToken,
    sessionIssuedAt,
  });

  return buildAuthPayload(user, sessionToken, 'register');
}
