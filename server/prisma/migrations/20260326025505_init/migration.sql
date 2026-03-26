-- AlterTable
ALTER TABLE "artisan_matches" ADD COLUMN     "artisan_id" TEXT;

-- AlterTable
ALTER TABLE "submissions" ADD COLUMN     "user_id" TEXT;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "phone" TEXT,
    "nickname" TEXT,
    "avatar_url" TEXT,
    "openid" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artisans" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "avatar_url" TEXT,
    "craft_tags" JSONB NOT NULL,
    "portfolio" JSONB NOT NULL DEFAULT '[]',
    "price_range_min" INTEGER NOT NULL,
    "price_range_max" INTEGER NOT NULL,
    "avg_days" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "artisans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "artisan_id" TEXT NOT NULL,
    "submission_id" TEXT NOT NULL,
    "design_confirmation_id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "total_price_fen" INTEGER NOT NULL,
    "agreed_delivery_date" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_messages" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order_id" TEXT NOT NULL,
    "sender_type" TEXT NOT NULL,
    "user_id" TEXT,
    "artisan_id" TEXT,
    "content" TEXT NOT NULL,
    "attachments" JSONB NOT NULL DEFAULT '[]',

    CONSTRAINT "order_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_stages" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "order_id" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "done_at" TIMESTAMP(3),

    CONSTRAINT "order_stages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uploaded_files" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "oss_url" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "size_bytes" INTEGER,
    "original_name" TEXT,
    "source_type" TEXT NOT NULL,
    "source_id" TEXT,

    CONSTRAINT "uploaded_files_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_openid_key" ON "users"("openid");

-- CreateIndex
CREATE UNIQUE INDEX "orders_design_confirmation_id_key" ON "orders"("design_confirmation_id");

-- AddForeignKey
ALTER TABLE "submissions" ADD CONSTRAINT "submissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artisan_matches" ADD CONSTRAINT "artisan_matches_artisan_id_fkey" FOREIGN KEY ("artisan_id") REFERENCES "artisans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_artisan_id_fkey" FOREIGN KEY ("artisan_id") REFERENCES "artisans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_design_confirmation_id_fkey" FOREIGN KEY ("design_confirmation_id") REFERENCES "design_confirmations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_messages" ADD CONSTRAINT "order_messages_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_messages" ADD CONSTRAINT "order_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_messages" ADD CONSTRAINT "order_messages_artisan_id_fkey" FOREIGN KEY ("artisan_id") REFERENCES "artisans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_stages" ADD CONSTRAINT "order_stages_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
