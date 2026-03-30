# 非遗定制项目部署说明

这份文档记录的是这次已经实际跑通的一套部署方法，目标是让同事接手时可以直接照着做，把后端部署到服务器、把域名解析好、把接口调通。

## 这次最终跑通的结果

- 后端服务跑在阿里云 ECS 上
- 数据库跑在同一台服务器上的 PostgreSQL
- 图片上传走七牛云
- AI 能力走 aihubmix
- 当前临时可用接口地址：
  - `http://api.ryanssuit.com:4300`
- 健康检查已验证通过：
  - `http://api.ryanssuit.com:4300/health`

## 先说结论

这次不是用 Docker 跑通的，最后采用的是更直接的方式：

1. 服务器上直接安装 PostgreSQL
2. 服务器上直接用 Node 启动后端
3. 阿里云安全组放行 `4300`
4. Ubuntu 防火墙 `ufw` 也放行 `4300`
5. 域名 `api.ryanssuit.com` 解析到服务器公网 IP
6. 前端接口地址改成 `http://api.ryanssuit.com:4300`

## 服务器基本信息

- 系统：Ubuntu 22.04
- 服务器公网 IP：`8.152.215.190`
- 项目目录：`/root/nonheritage-app`
- 后端目录：`/root/nonheritage-app/server`

## 一、域名解析

在阿里云域名解析里新增一条 A 记录：

- 主机记录：`api`
- 记录类型：`A`
- 记录值：服务器公网 IP，例如 `8.152.215.190`

最终得到：

- `api.ryanssuit.com`

## 二、把项目拉到服务器

服务器安装 git 后，直接拉仓库：

```bash
cd /root
git clone https://github.com/<你的组织或用户名>/nonheritage-app.git
cd /root/nonheritage-app/server
```

如果仓库是私有的，就用 token 或其他有权限的方式拉取。

## 三、服务器安装运行环境

### 1. 安装 Node

这次服务器上已有：

- Node.js `v20.20.1`
- npm `10.8.2`

### 2. 安装 PostgreSQL

```bash
apt update
apt install -y postgresql postgresql-contrib
systemctl start postgresql
systemctl enable postgresql
```

### 3. 创建数据库和用户

```bash
sudo -u postgres psql
```

进入后执行：

```sql
CREATE USER nonheritage WITH PASSWORD 'nonheritage_dev';
CREATE DATABASE nonheritage OWNER nonheritage;
\q
```

## 四、配置后端环境变量

先准备 `.env`：

```bash
cd /root/nonheritage-app/server
cp .env.example .env
touch .env.local
```

### 这次实际用到的配置项

至少需要这些：

```env
PORT=4300
NODE_ENV=production

DATABASE_URL=postgresql://nonheritage:nonheritage_dev@127.0.0.1:5432/nonheritage?schema=public

QINIU_ACCESS_KEY=<你的七牛 AccessKey>
QINIU_SECRET_KEY=<你的七牛 SecretKey>
QINIU_BUCKET=<你的七牛空间名>
QINIU_BUCKET_DOMAIN=https://<你的七牛访问域名>
QINIU_REGION=<你的七牛区域>

AIHUBMIX_API_KEY=<你的 aihubmix key>

AI_REQUIREMENT_PARSER=aihubmix
AI_CRAFT_PLAN_GEN=aihubmix
AI_PREVIEW_RENDERER=aihubmix
AI_ARTISAN_MATCHER=aihubmix
AI_DESIGN_CONFIRM=aihubmix
```

### 不用的内容

如果不用阿里云 OSS，就保持这些为空：

```env
OSS_REGION=
OSS_ACCESS_KEY_ID=
OSS_ACCESS_KEY_SECRET=
OSS_BUCKET=
OSS_BASE_URL=
```

## 五、安装后端依赖并初始化

```bash
cd /root/nonheritage-app/server
npm install
npx prisma generate
npx prisma migrate deploy
```

如果这三步都成功，说明数据库和代码已经对上了。

## 六、启动后端

这次最终是直接用 `nohup` 启动的：

```bash
cd /root/nonheritage-app/server
nohup npm start > server.log 2>&1 &
```

检查服务是否起来：

```bash
ss -lntp | grep 4300
tail -n 30 /root/nonheritage-app/server/server.log
```

正常应该能看到：

- `0.0.0.0:4300` 在监听
- 日志里有 `server listening on http://0.0.0.0:4300`

## 七、放行端口

### 1. 阿里云安全组

在 ECS 安全组的入方向规则里放行：

- `4300/4300`

协议：

- `TCP`

来源：

- `0.0.0.0/0`

### 2. Ubuntu 防火墙

这一步这次是关键坑点。

虽然阿里云安全组已经放开了，但一开始服务器自己没有放开 `4300`，所以外部一直打不通。

实际修复命令：

```bash
ufw allow 4300/tcp
ufw reload
ufw status
```

`ufw status` 里确认能看到：

- `4300/tcp ALLOW Anywhere`

## 八、接口验证

### 1. 服务器本机验证

```bash
curl -i http://127.0.0.1:4300/health
```

### 2. 外部验证

```bash
curl -i http://8.152.215.190:4300/health
```

### 3. 域名验证

```bash
curl -i http://api.ryanssuit.com:4300/health
```

正常返回应该类似：

```json
{
  "status": "ok",
  "traceId": "..."
}
```

## 九、七牛云上传验证

后端启动后，在服务器上执行：

```bash
curl -i -F "file=@/etc/hosts;type=text/plain" http://127.0.0.1:4300/v1/uploads
```

正常会返回一段上传结果，里面有七牛地址，例如：

```json
{
  "data": {
    "url": "https://img.ryanssuit.com/submissions/xxxx.plain"
  }
}
```

如果拿到了这个地址，说明七牛配置成功。

## 十、AI 接口验证

### 1. 提交需求

```bash
curl -s -X POST http://127.0.0.1:4300/v1/requirements \
  -H "Content-Type: application/json" \
  -d '{"images":[],"requirementText":"想做一条蓝染真丝围巾，送给妈妈，整体温柔一点。","preferredCraft":"tie-dye","budgetRange":"¥8,000","expectedDeliveryDate":"5 月中旬前"}'
```

如果成功，会拿到：

- `submission`
- `structuredRequirement`

而且 `structuredRequirement.aiMode` 应该是：

- `aihubmix`

### 2. 生成方案

拿上一步的 `submission.id` 继续调用：

```bash
curl -s -X POST http://127.0.0.1:4300/v1/craft-plans \
  -H "Content-Type: application/json" \
  -d '{"submissionId":"<上一步返回的 submission.id>"}'
```

如果能返回方案、预览、匹配结果，说明 AI 这条链路也通了。

## 十一、前端这边要做什么

本地项目根目录 `.env` 改成：

```env
EXPO_PUBLIC_API_URL=http://api.ryanssuit.com:4300
```

然后重新打一个新的 iOS 包上传 TestFlight。

注意：

- 地址改完以后必须重新打包
- 老包不会自动变成新地址

## 十二、这次踩过的坑

### 1. 不是 Docker 路线跑通的

一开始尝试用 Docker，但镜像拉取太慢，最后没采用。

### 2. 最关键的实际问题不是域名，而是 `4300` 没放开

表面上一直像是域名不通、反向代理不通、备案不通，最后真正卡住的是：

- 阿里云安全组要放开 `4300`
- Ubuntu `ufw` 也要放开 `4300`

少了任何一层，外部都打不通。

### 3. 本机通不代表外部通

这次就出现过：

- `127.0.0.1:4300` 本机能访问
- 外部访问还是失败

最后是因为 `ufw` 没放开。

## 十三、当前状态说明

目前可用的是带端口的接口地址：

- `http://api.ryanssuit.com:4300`

这是临时线上可用方案。

如果后面要改成更干净的正式地址，例如：

- `https://api.ryanssuit.com`

那就还要继续做：

1. 域名备案完成
2. 80/443 正式接入
3. 配好 SSL 证书
4. 去掉 `:4300`

## 十四、建议补充

### 1. 进程守护

现在后端如果还是用 `nohup` 起，只适合临时调试，不适合长期跑。

建议改成 `pm2`。项目里已经可以直接使用：

```bash
cd /root/nonheritage-app/server
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

如果后面改了 `.env` 或拉了新代码，重启用：

```bash
cd /root/nonheritage-app/server
pm2 restart nonheritage-server --update-env
```

查看状态和日志：

```bash
pm2 status
pm2 logs nonheritage-server --lines 100
```

注意不要再用：

```bash
pm2 restart all
```

因为服务器上可能还有别的项目，会一起被重启。

### 2. 密钥安全

如果密钥曾经被公开贴出，建议马上更换：

- 七牛云密钥
- aihubmix key

### 3. 启动后例行检查

每次上线后至少检查这三项：

```bash
curl -i http://api.ryanssuit.com:4300/health
curl -i -F "file=@/etc/hosts;type=text/plain" http://127.0.0.1:4300/v1/uploads
tail -n 50 /root/nonheritage-app/server/server.log
```

---

如果同事只想知道一句话版本：

这次最终是“ECS + 本机 PostgreSQL + 直接 Node 启动 + 七牛上传 + aihubmix + 放开 4300 端口”跑通的，最容易漏掉的是服务器本机 `ufw` 也要放开 `4300`。
