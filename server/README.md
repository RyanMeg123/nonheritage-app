# 第一阶段后端骨架

这个目录只覆盖当前最小流程：

首页 -> 发布需求 -> 工艺方案页

目标不是做完整后端，而是先给前端和后续 AI 接入一个稳定、可扩展的接口面。

## 目录说明

- `src/index.js`: 启动入口
- `src/http.js`: 路由和统一响应
- `src/service.js`: 第一阶段业务编排
- `src/ai-adapters.js`: 后续 AI 能力预留位，当前先走 mock
- `src/observability.js`: 错误采集与 Sentry 预留位
- `test/api.test.js`: 接口自测

## 当前接口

- `GET /health`
- `GET /v1/bootstrap`
- `POST /v1/requirements`
- `POST /v1/craft-plans`
- `GET /v1/craft-plans/:planId`
- `GET /v1/craft-plans/:planId/matches`
- `POST /v1/client-errors`

## 启动

```bash
cd /Users/zwj/Documents/nonheritage-app/server
npm test
npm start
```

默认端口是 `4300`。

## 当前哪些是 mock

- 结构化需求整理
- 工艺方案生成
- 预览图生成结果
- 传承人匹配
- 设计确认单草案

这些能力都已经有固定返回结构，后续只需要把 `src/ai-adapters.js` 里的 mock 实现替换成真实服务即可。

## Sentry 预留

当前已经预留了：

- 服务端错误采集入口
- 客户端错误上报接口 `POST /v1/client-errors`
- 错误分类码
- `traceId` 透传

后续只需要在 `src/observability.js` 里接入真实 Sentry SDK，并在 Expo App 里把页面错误、请求错误、上传错误统一发到该接口或直接发到 Sentry。
