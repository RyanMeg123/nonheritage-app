import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify(scryptCallback);

export async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const derivedKey = await scrypt(password, salt, 64);
  return `${salt}:${Buffer.from(derivedKey).toString('hex')}`;
}

export async function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(':')) {
    return false;
  }

  const [salt, key] = storedHash.split(':');
  const derivedKey = await scrypt(password, salt, 64);
  const storedBuffer = Buffer.from(key, 'hex');
  const candidateBuffer = Buffer.from(derivedKey);

  if (storedBuffer.length !== candidateBuffer.length) {
    return false;
  }

  return timingSafeEqual(storedBuffer, candidateBuffer);
}

export function createSessionToken() {
  return randomBytes(24).toString('hex');
}
