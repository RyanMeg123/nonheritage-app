export function buildAuthPayload(user, sessionToken, mode) {
  return {
    user: {
      id: user.id,
      phone: user.phone,
      nickname: user.nickname,
    },
    session: {
      token: sessionToken,
      loginMode: mode,
    },
  };
}

export function createDefaultNickname(phone) {
  const suffix = phone.slice(-4);
  return `用户${suffix}`;
}
