// 使用pm2，根目录创建ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'fe-ai',
            host: '0.0.0.0',
            port: '3005',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs',
        },
    ],
};
