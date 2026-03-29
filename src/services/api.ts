import type { FeaturedCase } from '../types';

/**
 * api.ts — 后端 HTTP 客户端
 *
 * 配置 API 地址：
 *   开发：在项目根目录新建 .env，写入 EXPO_PUBLIC_API_URL=http://localhost:4300
 *   真机调试：改成你电脑的局域网 IP，如 http://192.168.1.100:4300
 */

const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4300';

function buildNetworkErrorHelp(url: string) {
  if (!url.includes('localhost') && !url.includes('127.0.0.1')) {
    return '请确认当前 API 地址可访问，并检查服务是否已启动。';
  }

  return '请确认本机后端已在 4300 端口启动；如果当前是在真机调试，需要把 EXPO_PUBLIC_API_URL 改成你电脑的局域网 IP，而不是 localhost。';
}

export class ApiRequestError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  traceId?: string;

  constructor(
    message: string,
    options: {
      status: number;
      code?: string;
      details?: unknown;
      traceId?: string;
    },
  ) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = options.status;
    this.code = options.code;
    this.details = options.details;
    this.traceId = options.traceId;
  }
}

function buildInvalidResponseError(url: string, status: number, text: string, contentType: string | null) {
  const normalizedText = text.trim();

  if (normalizedText.startsWith('<')) {
    return new Error(
      `接口地址暂时不可用：${url}。服务器返回的是网页，不是接口数据。请检查线上域名、端口或网关配置是否已生效。`,
    );
  }

  return new Error(
    `接口地址返回了无法识别的内容：${url}（状态 ${status}${
      contentType ? `，类型 ${contentType}` : ''
    }）。请检查线上服务是否正常返回 JSON。`,
  );
}

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
  previewImages: { id: string; url: string | { url?: string; image_url?: string }; caption: string }[];
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

export type ApiBootstrapPayload = {
  home: {
    heroTitle: string;
    heroSummary: string;
    supportedCrafts: Array<{ id: string; label: string }>;
  };
  publishForm: {
    maxImages: number;
    supportedCrafts: Array<{ id: string; label: string }>;
    budgetHints: string[];
    deliveryHints: string[];
  };
};

export type ApiUploadResponse = {
  url: string;
};

export type ClientErrorEnvelope = {
  category: string;
  message: string;
  source: string;
  screenName?: string;
  traceId?: string;
  details?: Record<string, unknown>;
};

// ── 核心 fetch 封装 ───────────────────────────────────────────────

export async function request<T>(
  path: string,
  options?: RequestInit & { unwrapData?: boolean },
): Promise<T> {
  const { unwrapData = true, ...requestOptions } = options ?? {};
  const body = requestOptions.body;
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  const url = `${BASE_URL}${path}`;

  const headers = isFormData
    ? requestOptions.headers
    : { 'Content-Type': 'application/json', ...requestOptions.headers };

  console.log('[REQ]', url, { ...requestOptions, headers });

  try {
    const res = await fetch(url, {
      ...requestOptions,
      headers,
    });

    console.log('[RES STATUS]', res.status);

    const text = await res.text();
    console.log('[RES BODY]', text);
    const contentType = res.headers.get('content-type');
    const isJsonResponse = (contentType ?? '').toLowerCase().includes('application/json');
    let json: unknown = null;

    if (text) {
      if (isJsonResponse) {
        try {
          json = JSON.parse(text);
        } catch {
          throw buildInvalidResponseError(url, res.status, text, contentType);
        }
      } else {
        throw buildInvalidResponseError(url, res.status, text, contentType);
      }
    }

    if (!res.ok) {
      const apiError = json as
        | {
            error?: {
              message?: string;
              code?: string;
              details?: unknown;
              traceId?: string;
            };
          }
        | null;
      const msg = apiError?.error?.message ?? `请求失败 (${res.status})`;
      throw new ApiRequestError(msg, {
        status: res.status,
        code: apiError?.error?.code,
        details: apiError?.error?.details,
        traceId: apiError?.error?.traceId,
      });
    }

    const payload = json as { data?: T } | T | null;
    return (unwrapData ? (payload as { data?: T } | null)?.data : payload) as T;
  } catch (error) {
    if (error instanceof TypeError) {
      const help = buildNetworkErrorHelp(url);
      const networkError = new Error(`无法连接后端：${url}。${help}`);
      networkError.name = 'ApiNetworkError';
      console.log('[RES ERROR]', networkError);
      throw networkError;
    }

    console.log('[RES ERROR]', error);
    throw error;
  }
}

// ── 对外暴露的 API 方法 ───────────────────────────────────────────

export const api = {
  /** 健康检查 */
  health: () =>
    request<{ status: string; traceId: string }>('/health', { unwrapData: false }),

  /** 启动数据 */
  getBootstrap: () =>
    request<ApiBootstrapPayload>('/v1/bootstrap'),

  /** 首页真实轮播 */
  getFeaturedCases: () => request<FeaturedCase[]>('/v1/home/featured-cases'),

  /** 上传单张图片 */
  uploadImage: (file: { uri: string; name?: string; type?: string }) => {
    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      name: file.name ?? 'upload.jpg',
      type: file.type ?? 'image/jpeg',
    } as never);

    return request<ApiUploadResponse>('/v1/uploads', {
      method: 'POST',
      body: formData,
    });
  },

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

  /** 客户端错误上报 */
  reportClientError: (payload: ClientErrorEnvelope) =>
    request<{ accepted: boolean }>('/v1/client-errors', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
