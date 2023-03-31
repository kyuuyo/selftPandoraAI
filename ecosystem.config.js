// 使用pm2，根目录创建ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'PandoraAI-fe',
            port: '3003',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
        },
    ],
};
