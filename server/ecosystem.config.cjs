module.exports = {
  apps: [
    {
      name: 'nonheritage-server',
      cwd: '/root/nonheritage-app/server',
      script: 'src/index.js',
      interpreter: 'node',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
