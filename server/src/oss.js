/**
 * oss.js — 对象存储上传封装
 *
 * 当前支持两种提供方：
 * 1. 七牛云（优先）
 * 2. 阿里云 OSS
 *
 * 若两者都未配置，开发环境仍会回退为 mock URL。
 */

import { randomUUID } from 'node:crypto';
import OSS from 'ali-oss';
import qiniu from 'qiniu';

let _client;
let _usingMockUpload = false;

function hasQiniuConfig() {
  const { QINIU_ACCESS_KEY, QINIU_SECRET_KEY, QINIU_BUCKET, QINIU_BUCKET_DOMAIN } = process.env;
  return Boolean(QINIU_ACCESS_KEY && QINIU_SECRET_KEY && QINIU_BUCKET && QINIU_BUCKET_DOMAIN);
}

function hasOssConfig() {
  const { OSS_REGION, OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_BUCKET } = process.env;
  return Boolean(OSS_REGION && OSS_ACCESS_KEY_ID && OSS_ACCESS_KEY_SECRET && OSS_BUCKET);
}

function getQiniuZone(region = '') {
  const normalized = region.trim().toLowerCase();
  const zoneMap = {
    z0: qiniu.zone.Zone_z0,
    'cn-east-1': qiniu.zone.Zone_z0,
    'huadong': qiniu.zone.Zone_z0,
    'east-china': qiniu.zone.Zone_z0,
    z1: qiniu.zone.Zone_z1,
    'cn-north-1': qiniu.zone.Zone_z1,
    'huabei': qiniu.zone.Zone_z1,
    'north-china': qiniu.zone.Zone_z1,
    z2: qiniu.zone.Zone_z2,
    'cn-south-1': qiniu.zone.Zone_z2,
    'huanan': qiniu.zone.Zone_z2,
    'south-china': qiniu.zone.Zone_z2,
    na0: qiniu.zone.Zone_na0,
    'north-america': qiniu.zone.Zone_na0,
    as0: qiniu.zone.Zone_as0,
    'ap-southeast-1': qiniu.zone.Zone_as0,
    'southeast-asia': qiniu.zone.Zone_as0,
  };

  return zoneMap[normalized] ?? qiniu.zone.Zone_z0;
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

async function uploadToQiniu(buffer, mimeType, objectKey) {
  const { QINIU_ACCESS_KEY, QINIU_SECRET_KEY, QINIU_BUCKET, QINIU_BUCKET_DOMAIN, QINIU_REGION } = process.env;

  if (!hasQiniuConfig()) {
    throw new Error(
      '七牛环境变量未配置：QINIU_ACCESS_KEY / QINIU_SECRET_KEY / QINIU_BUCKET / QINIU_BUCKET_DOMAIN',
    );
  }

  const mac = new qiniu.auth.digest.Mac(QINIU_ACCESS_KEY, QINIU_SECRET_KEY);
  const putPolicy = new qiniu.rs.PutPolicy({
    scope: `${QINIU_BUCKET}:${objectKey}`,
  });
  const uploadToken = putPolicy.uploadToken(mac);
  const config = new qiniu.conf.Config({
    useHttpsDomain: true,
    zone: getQiniuZone(QINIU_REGION),
  });
  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();
  putExtra.mimeType = mimeType;

  await new Promise((resolve, reject) => {
    formUploader.put(uploadToken, objectKey, buffer, putExtra, (err, body, info) => {
      if (err) {
        reject(err);
        return;
      }

      if (info?.statusCode && info.statusCode >= 200 && info.statusCode < 300) {
        resolve(body);
        return;
      }

      reject(new Error(`七牛上传失败，状态码：${info?.statusCode ?? 'unknown'}`));
    });
  });

  const base = (QINIU_BUCKET_DOMAIN ?? '').replace(/\/$/, '');
  const normalizedBase = /^https?:\/\//i.test(base) ? base : `https://${base}`;
  return `${normalizedBase}/${objectKey}`;
}

async function uploadToAliOss(buffer, mimeType, objectKey) {
  const client = getOssClient();
  await client.put(objectKey, buffer, {
    headers: { 'Content-Type': mimeType },
  });

  const base = (process.env.OSS_BASE_URL ?? '').replace(/\/$/, '');
  return `${base}/${objectKey}`;
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

  if (hasQiniuConfig()) {
    return uploadToQiniu(buffer, mimeType, objectKey);
  }

  if (hasOssConfig()) {
    return uploadToAliOss(buffer, mimeType, objectKey);
  }

  if (process.env.NODE_ENV !== 'production') {
    if (!_usingMockUpload) {
      console.warn('[uploadBuffer] 七牛/OSS 均未配置，开发环境回退为 mock URL。');
      _usingMockUpload = true;
    }
    return `mock:///${objectKey}`;
  }

  throw new Error('对象存储未配置：请配置七牛或阿里云 OSS 环境变量。');
}
