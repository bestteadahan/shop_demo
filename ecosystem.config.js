module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'MKTPlace',
      script    : 'bin/www',
      watch     : true,
      instances  : 1,
      exec_mode : "fork",
      env: {
        COMMON_VARIABLE: 'true',
        LOG:  'error.log',
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production',
        LOG:  'error.log'
      }
    }
  ]
};
