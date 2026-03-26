-- CreateTable
CREATE TABLE "submissions" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "images" JSONB NOT NULL,
    "requirement_text" TEXT NOT NULL,
    "preferred_craft" TEXT NOT NULL,
    "budget_range" TEXT NOT NULL,
    "expected_delivery_date" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'submitted',

    CONSTRAINT "submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "structured_requirements" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "submission_id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "craft_preference" TEXT NOT NULL,
    "material_preference" TEXT NOT NULL,
    "color_preference" TEXT NOT NULL,
    "budget_range" TEXT NOT NULL,
    "delivery_date" TEXT NOT NULL,
    "acceptable_variance" TEXT NOT NULL,
    "accepts_modification" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL DEFAULT 'ready',
    "ai_mode" TEXT NOT NULL DEFAULT 'mock',
    "raw_response" JSONB,

    CONSTRAINT "structured_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "craft_plans" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "submission_id" TEXT NOT NULL,
    "structured_requirement_id" TEXT NOT NULL,
    "recommended_craft" TEXT NOT NULL,
    "recommendation_reason" TEXT NOT NULL,
    "plan_summary" TEXT NOT NULL,
    "risk_notes" JSONB NOT NULL,
    "timeline_range" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'generated',
    "ai_mode" TEXT NOT NULL DEFAULT 'mock',
    "raw_response" JSONB,

    CONSTRAINT "craft_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preview_results" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "submission_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "source_images" JSONB NOT NULL,
    "preview_images" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending_generation',

    CONSTRAINT "preview_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artisan_matches" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "plan_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "craft_expertise" TEXT NOT NULL,
    "price_range" TEXT NOT NULL,
    "timeline_range" TEXT NOT NULL,
    "match_reason" TEXT NOT NULL,
    "rank" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "artisan_matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "design_confirmations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "submission_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sections" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',

    CONSTRAINT "design_confirmations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "structured_requirements_submission_id_key" ON "structured_requirements"("submission_id");

-- CreateIndex
CREATE UNIQUE INDEX "craft_plans_submission_id_key" ON "craft_plans"("submission_id");

-- CreateIndex
CREATE UNIQUE INDEX "preview_results_plan_id_key" ON "preview_results"("plan_id");

-- CreateIndex
CREATE UNIQUE INDEX "design_confirmations_plan_id_key" ON "design_confirmations"("plan_id");

-- AddForeignKey
ALTER TABLE "structured_requirements" ADD CONSTRAINT "structured_requirements_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "craft_plans" ADD CONSTRAINT "craft_plans_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preview_results" ADD CONSTRAINT "preview_results_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "craft_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artisan_matches" ADD CONSTRAINT "artisan_matches_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "craft_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "design_confirmations" ADD CONSTRAINT "design_confirmations_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "craft_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
