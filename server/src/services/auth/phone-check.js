import { findUserByPhone } from '../../repositories/users.js';

export async function checkPhone(phone) {
  const user = await findUserByPhone(phone);

  return {
    phone,
    exists: Boolean(user),
    nextAction: user ? 'login' : 'register-login',
  };
}
