export const environment = {
  // config
  production: true,
  globalPrefix: 'api',
  // server
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3333,
  // database
  dbUser: process.env.DB_USER || '',
  dbPwd: process.env.DB_PWD || '',
  dbBdd: process.env.DB_DDB || 'test',
  dbHost: process.env.DB_HOST || 'localhost',
  secretToken: 'bad secret token',
  // methods
  getHost: (ssl = false) => `http${(ssl) ? 's' : ''}://${environment.host}:${environment.port}`,
  getDBHost: () => `mongodb://${environment.dbHost}/${environment.dbBdd}`
};
