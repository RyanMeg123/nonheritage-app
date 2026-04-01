import { AppError, ErrorCode } from '../../errors.js';
import { deleteUserAccount, findUserBySessionToken } from '../../repositories/users.js';

function extractSessionToken(authorizationHeader) {
  if (typeof authorizationHeader !== 'string') {
    throw new AppError('请先登录后再试。', {
      statusCode: 401,
      code: ErrorCode.AUTH_INVALID,
    });
  }

  const match = authorizationHeader.match(/^Bearer\s+(.+)$/i);
  if (!match?.[1]) {
    throw new AppError('登录状态无效，请重新登录后再试。', {
      statusCode: 401,
      code: ErrorCode.AUTH_INVALID,
    });
  }

  return match[1].trim();
}

export async function deleteAccount({ authorizationHeader }) {
  const sessionToken = extractSessionToken(authorizationHeader);
  const user = await findUserBySessionToken(sessionToken);

  if (!user) {
    throw new AppError('登录状态已失效，请重新登录后再试。', {
      statusCode: 401,
      code: ErrorCode.AUTH_INVALID,
    });
  }

  await deleteUserAccount(user.id);

  return {
    deleted: true,
    deletedUserId: user.id,
  };
}
