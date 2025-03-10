module.exports = {
    apps: [
        {
            name: 'whgbali-kpi-analyzer',
            script: 'node_modules/.bin/next',
            args: 'start',
            instance: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 7664
            }
        }
    ]
}