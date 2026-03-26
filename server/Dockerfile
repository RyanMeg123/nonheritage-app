FROM node:22-alpine

WORKDIR /app

# 先复制依赖文件，利用 Docker 层缓存
COPY package*.json ./
RUN npm ci --omit=dev

# 复制源码和 prisma
COPY prisma ./prisma
COPY src ./src
COPY prisma.config.ts ./

# 生成 Prisma Client
RUN npx prisma generate

EXPOSE 4300

# 启动时先跑 migrate，再起服务
CMD ["sh", "-c", "npx prisma migrate deploy && node src/index.js"]
