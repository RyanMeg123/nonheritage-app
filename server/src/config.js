export const config = {
  port: Number(process.env.PORT ?? 4300),
  sentryDsn: process.env.SENTRY_DSN ?? '',
  defaultAiMode: process.env.AI_MODE ?? 'mock',
};
