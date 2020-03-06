export const environment = {
  // config
  production: false,
  globalPrefix: 'api',
  // server
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3333,
  // database
  dbUser: process.env.DB_USER || '',
  dbPwd: process.env.DB_PWD || '',
  dbBdd: process.env.DB_DDB || 'nomades-network-test',
  dbHost: process.env.DB_HOST || 'localhost',
  secretToken: 'bad secret token',
  // redis setting
  redisHost: process.env.DB_REDIS_SERVERS || '127.0.0.1', // YOUR-REDISLAB-URL,
  redisPort: process.env.DB_REDIS_PORT || 6379, // YOUR-REDIS-PORT,
  redisUser: process.env.DB_REDIS_USER || '', // YOUR-REDIS-PASS
  redisPwd: process.env.DB_REDIS_PASS || '', // YOUR-REDIS-PASS
  // mailer module
  mailer: {
    from: process.env.MAILER_FROM,
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
    host: process.env.MAILER_HOST,
    replayTo: process.env.MAILER_REPLAYTO
  },
  fronts: {
    pwa: 'http://localhost:4200' // 'https://nomades.world'
  },
  prefix: {
    confirmEmail: 'confirmEmail'
  },
  // methods
  getHost: (ssl = false) => `http${(ssl) ? 's' : ''}://${environment.host}:${environment.port}`,
  getDBHost: () => `mongodb://${environment.dbHost}/${environment.dbBdd}`,
  // getDBHost: () => `mongodb://${environment.dbUser}:${environment.dbPwd}@${environment.dbHost}/${environment.dbBdd}`

  version: 'DEV'
};
