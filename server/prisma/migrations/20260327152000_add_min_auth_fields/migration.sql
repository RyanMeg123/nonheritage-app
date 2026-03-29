ALTER TABLE "users"
ADD COLUMN "password_hash" TEXT,
ADD COLUMN "session_token" TEXT,
ADD COLUMN "session_issued_at" TIMESTAMP(3);

CREATE UNIQUE INDEX "users_session_token_key" ON "users"("session_token");
