module.exports = {
    apps: [
      {
        name: 'jcwdol130205-web',
        script: 'npm',
        args: 'run serve',
        env: {
          PORT: 2709,
          NODE_ENV: 'production',
        },
        cwd: '/var/www/html/jcwdol130205.purwadhikabootcamp.com/apps/web',
      },
      {
        name: 'jcwdol130205-api',
        script: 'npm',
        args: 'run serve',
        env: {
          PORT: 2809,
          NODE_ENV: 'production',
        },
        cwd: '/var/www/html/jcwdol130205.purwadhikabootcamp.com/apps/api',
      },
    ],
}
