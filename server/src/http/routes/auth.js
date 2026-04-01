import { deleteAccount } from '../../services/auth/delete-account.js';
import { login } from '../../services/auth/login.js';
import { checkPhone } from '../../services/auth/phone-check.js';
import { registerLogin } from '../../services/auth/register-login.js';
import { validateLoginRequest } from '../../validators/auth/login.js';
import { validatePhoneCheckRequest } from '../../validators/auth/phone-check.js';
import { validateRegisterLoginRequest } from '../../validators/auth/register-login.js';
import { parseJsonBody } from '../request-body.js';
import { json } from '../response.js';

export async function handleAuthRoute({ req, traceId, url }) {
  if (req.method === 'POST' && url.pathname === '/v1/auth/phone-check') {
    const body = await parseJsonBody(req);
    validatePhoneCheckRequest(body);
    return json({ data: await checkPhone(body.phone.trim()), traceId });
  }

  if (req.method === 'POST' && url.pathname === '/v1/auth/register-login') {
    const body = await parseJsonBody(req);
    validateRegisterLoginRequest(body);
    return json(
      {
        data: await registerLogin({
          phone: body.phone.trim(),
          password: body.password,
          nickname: body.nickname,
        }),
        traceId,
      },
      201,
    );
  }

  if (req.method === 'POST' && url.pathname === '/v1/auth/login') {
    const body = await parseJsonBody(req);
    validateLoginRequest(body);
    return json(
      {
        data: await login({
          phone: body.phone.trim(),
          password: body.password,
        }),
        traceId,
      },
      200,
    );
  }

  if (req.method === 'DELETE' && url.pathname === '/v1/auth/account') {
    return json(
      {
        data: await deleteAccount({
          authorizationHeader: req.headers.authorization,
        }),
        traceId,
      },
      200,
    );
  }

  return null;
}
