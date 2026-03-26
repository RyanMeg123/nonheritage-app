/**
 * oss.js — 阿里云 OSS 图片上传封装
 *
 * 依赖 ali-oss，配置通过环境变量注入：
 *   OSS_REGION      e.g. oss-cn-hangzhou
 *   OSS_ACCESS_KEY_ID
 *   OSS_ACCESS_KEY_SECRET
 *   OSS_BUCKET
 *   OSS_BASE_URL    e.g. https://your-bucket.oss-cn-hangzhou.aliyuncs.com
 */

import { randomUUID } from 'node:crypto';
import OSS from 'ali-oss';

let _client;
let _usingMockUpload = false;

function hasOssConfig() {
  const { OSS_REGION, OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_BUCKET } = process.env;
  return Boolean(OSS_REGION && OSS_ACCESS_KEY_ID && OSS_ACCESS_KEY_SECRET && OSS_BUCKET);
}

function getOssClient() {
  if (!_client) {
    const { OSS_REGION, OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_BUCKET } = process.env;
    if (!hasOssConfig()) {
      throw new Error('OSS 环境变量未配置：OSS_REGION / OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET / OSS_BUCKET');
    }
    _client = new OSS({
      region: OSS_REGION,
      accessKeyId: OSS_ACCESS_KEY_ID,
      accessKeySecret: OSS_ACCESS_KEY_SECRET,
      bucket: OSS_BUCKET,
      secure: true,
    });
  }
  return _client;
}

/**
 * 上传一个 Buffer 到 OSS，返回公开访问 URL。
 *
 * @param {Buffer} buffer   文件内容
 * @param {string} mimeType e.g. 'image/jpeg'
 * @param {string} [folder] 存储目录前缀，默认 'uploads'
 * @returns {Promise<string>} 公开 URL
 */
export async function uploadBuffer(buffer, mimeType, folder = 'uploads') {
  const ext = mimeType.split('/')[1] ?? 'bin';
  const objectKey = `${folder}/${randomUUID()}.${ext}`;

  if (!hasOssConfig() && process.env.NODE_ENV !== 'production') {
    if (!_usingMockUpload) {
      console.warn('[uploadBuffer] OSS 未配置，开发环境回退为 mock URL。');
      _usingMockUpload = true;
    }
    return `mock:///${objectKey}`;
  }

  const client = getOssClient();
  await client.put(objectKey, buffer, {
    headers: { 'Content-Type': mimeType },
  });

  const base = (process.env.OSS_BASE_URL ?? '').replace(/\/$/, '');
  return `${base}/${objectKey}`;
}
