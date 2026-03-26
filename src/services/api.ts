/**
 * api.ts — 后端 HTTP 客户端
 *
 * 配置 API 地址：
 *   开发：在项目根目录新建 .env，写入 EXPO_PUBLIC_API_URL=http://localhost:4300
 *   真机调试：改成你电脑的局域网 IP，如 http://192.168.1.100:4300
 */

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4300';

// ── 后端返回的原始数据类型 ────────────────────────────────────────

export type ApiSubmission = {
  id: string;
  images: { url: string }[];
  requirementText: string;
  preferredCraft: string;
  budgetRange: string;
  expectedDeliveryDate: string;
  status: string;
  createdAt: string;
};

export type ApiStructuredRequirement = {
  id: string;
  submissionId: string;
  category: string;
  style: string;
  craftPreference: string;
  materialPreference: string;
  colorPreference: string;
  budgetRange: string;
  deliveryDate: string;
  acceptableVariance: string;
  acceptsModification: boolean;
  status: string;
  aiMode: string;
};

export type ApiCraftPlan = {
  id: string;
  submissionId: string;
  structuredRequirementId: string;
  recommendedCraft: string;
  recommendationReason: string;
  planSummary: string;
  riskNotes: string[];
  timelineRange: string;
  priceRange: string;
  status: string;
  aiMode: string;
};

export type ApiArtisanMatch = {
  id: string;
  planId: string;
  name: string;
  craftExpertise: string;
  priceRange: string;
  timelineRange: string;
  matchReason: string;
  rank: number;
};

export type ApiDesignConfirmation = {
  id: string;
  submissionId: string;
  planId: string;
  title: string;
  sections: { id: string; title: string; value: string }[];
  status: string;
};

export type ApiPreviewResult = {
  id: string;
  submissionId: string;
  planId: string;
  sourceImages: { url: string }[];
  previewImages: { id: string; url: string; caption: string }[];
  description: string;
  status: string;
};

export type SubmitRequirementResponse = {
  submission: ApiSubmission;
  structuredRequirement: ApiStructuredRequirement;
  nextAction: string;
};

export type GenerateCraftPlanResponse = {
  plan: ApiCraftPlan;
  preview: ApiPreviewResult;
  matches: ApiArtisanMatch[];
  designConfirmation: ApiDesignConfirmation;
  pipeline: Record<string, string>;
};

// ── 核心 fetch 封装 ───────────────────────────────────────────────

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });

  const json = await res.json();

  if (!res.ok) {
    const msg = json?.error?.message ?? `请求失败 (${res.status})`;
    throw new Error(msg);
  }

  return json.data as T;
}

// ── 对外暴露的 API 方法 ───────────────────────────────────────────

export const api = {
  /** 健康检查 */
  health: () =>
    request<{ status: string }>('/health'),

  /** 提交需求 → 返回 submission + structuredRequirement */
  submitRequirement: (payload: {
    images: { url: string }[];
    requirementText: string;
    preferredCraft: string;
    budgetRange: string;
    expectedDeliveryDate: string;
  }) =>
    request<SubmitRequirementResponse>('/v1/requirements', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  /** 生成工艺方案 → 返回 plan + preview + matches + designConfirmation */
  generateCraftPlan: (submissionId: string) =>
    request<GenerateCraftPlanResponse>('/v1/craft-plans', {
      method: 'POST',
      body: JSON.stringify({ submissionId }),
    }),

  /** 获取单个方案详情 */
  getCraftPlan: (planId: string) =>
    request<ApiCraftPlan>(`/v1/craft-plans/${planId}`),

  /** 获取传承人匹配列表 */
  getArtisanMatches: (planId: string) =>
    request<ApiArtisanMatch[]>(`/v1/craft-plans/${planId}/matches`),
};
