// Doc: https://medium.com/@mjangid/environment-variables-with-angular-cli-4cdbb96017f6
const fs = require('fs');
require('dotenv').config();

const getVersion = (filePath: string) => {
  const data = fs.readFileSync(filePath);
  try {
    const res = data.toString();
    console.log('get json--->', JSON.parse(res).version);
    const { version_name = null, version = null} = JSON.parse(res);
    return version_name || version;
  } catch (error) {
    throw new Error('unable to get version')
  }
};
const getApps = (filePath: string) => {
  const data = fs.readFileSync(filePath);
  try {
    const res = data.toString();
    const { projects = {}} = JSON.parse(res);
    return Array.from(Object.keys(projects), k=>({name: `${k}`, ...projects[k]})).filter(p => p.ci)
  } catch (error) {
    throw new Error('unable to get projects')
  }
};
// create empty variables
const environment = process.env.ENVIRONMENT || 'dev';
console.log('[INFO] Config environment: ', environment);
let API_ENDPOINT: string,
AUTH_TOKEN: string,
HOST: string,
PORT: string,
TOKEN_EXPIRE: string,
SECRET_JWT: string,
// mongod
DB_USER: string,
DB_PWD: string,
DB_DDB: string,
DB_HOST: string,
// redis
REDIS_SERVERS: string,
REDIS_PORT: string,
REDIS_PASS: string,
REDIS_USER: string,
// mailer
MAILER_FROM: string,
MAILER_REPLAYTO: string,
MAILER_USER: string,
MAILER_PASS: string,
MAILER_HOST: string; 

// use switch to set correct value
switch (true) {
  case environment === 'production':
    // front
    AUTH_TOKEN = process.env.PROD_AUTH_TOKEN;
    API_ENDPOINT = process.env.PROD_API_ENDPOINT;
    // back    
    HOST = process.env.PORT || process.env.PROD_HOST || 'localhost';
    PORT = process.env.PROD_PORT;
    TOKEN_EXPIRE = process.env.PROD_TOKEN_EXPIRE;
    DB_USER = process.env.PROD_DB_USER;
    DB_PWD = process.env.PROD_DB_PWD;
    DB_DDB = process.env.PROD_DB_DDB;
    DB_HOST = process.env.PROD_DB_HOST;
    SECRET_JWT = process.env.PROD_SECRET_JWT;
    // mailer module
    MAILER_FROM = process.env.PROD_MAILER_FROM;
    MAILER_REPLAYTO = process.env.PROD_MAILER_REPLAYTO;
    MAILER_USER = process.env.PROD_MAILER_USER;
    MAILER_PASS = process.env.PROD_MAILER_PASS;
    MAILER_HOST = process.env.PROD_MAILER_HOST;
    // redis db
    REDIS_SERVERS = process.env.PROD_REDIS_SERVERS;
    REDIS_PORT = process.env.PROD_REDIS_PORT;
    REDIS_PASS = process.env.PROD_REDIS_PASS;
    REDIS_USER = process.env.PROD_REDIS_USER;
    break;
  case environment === 'stage':
    // front
    AUTH_TOKEN = process.env.STAGE_AUTH_TOKEN;
    API_ENDPOINT = process.env.STAGE_API_ENDPOINT;
    // back
    HOST = process.env.STAGE_HOST || 'localhost';
    PORT = process.env.STAGE_PORT;
    TOKEN_EXPIRE = process.env.STAGE_TOKEN_EXPIRE;
    DB_USER = process.env.STAGE_DB_USER;
    DB_PWD = process.env.STAGE_DB_PWD;
    DB_DDB = process.env.STAGE_DB_DDB;
    DB_HOST = process.env.STAGE_DB_HOST;
    SECRET_JWT = process.env.STAGE_SECRET_JWT;
    MAILER_FROM = process.env.STAGE_MAILER_FROM;
    MAILER_REPLAYTO = process.env.STAGE_MAILER_REPLAYTO;
    MAILER_USER = process.env.STAGE_MAILER_USER;
    MAILER_PASS = process.env.STAGE_MAILER_PASS;
    MAILER_HOST = process.env.STAGE_MAILER_HOST;
    // redis db
    REDIS_SERVERS = process.env.STAGE_REDIS_SERVERS;
    REDIS_PORT = process.env.STAGE_REDIS_PORT;
    REDIS_PASS = process.env.STAGE_REDIS_PASS;
    REDIS_USER = process.env.STAGE_REDIS_USER;
    break;
  default: // dev
    // front
    AUTH_TOKEN = process.env.AUTH_TOKEN || 'authToken';
    API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:3333/api';
    // back
    HOST = process.env.HOST || 'localhost';
    PORT = process.env.PORT || '3333';
    TOKEN_EXPIRE = process.env.TOKEN_EXPIRE || '86400000';
    DB_USER = process.env.DB_USER || '' ;
    DB_PWD = process.env.DB_PWD || '';
    DB_DDB = process.env.DB_DDB || 'test';
    DB_HOST = process.env.DB_HOST || 'localhost';
    SECRET_JWT = process.env.SECRET_JWT || 'Bad secret jwt';
    MAILER_FROM = process.env.MAILER_FROM || null;
    MAILER_REPLAYTO = process.env.MAILER_REPLAYTO || null;
    MAILER_USER = process.env.MAILER_USER;
    MAILER_PASS = process.env.MAILER_PASS;
    MAILER_HOST = process.env.MAILER_HOST;
    // redis db
    REDIS_SERVERS = process.env.REDIS_SERVERS || '127.0.0.1';
    REDIS_PORT = process.env.REDIS_PORT || '6379';
    REDIS_PASS = process.env.REDIS_PASS || '';
    REDIS_USER = process.env.REDIS_USER || '';
    break;
}

// define app object array
const nxApps = getApps('./nx.json');
const APPS = [...nxApps.map(app => {
  let appConfig;
  switch(true) {
    case app.name.includes('pwa'):
      appConfig = Object.assign({}, app, {
        targetPath: (environment !== 'dev')
          ? `./apps/${app.name}/src/environments/environment.prod.ts`
          : `./apps/${app.name}/src/environments/environment.ts`,
        envfile:  `
        export const environment = { 
          production: true,
          name: '${environment}',
          authToken: '${AUTH_TOKEN}',
          apiEndpoint: '${API_ENDPOINT}',
          version: '${getVersion(`./apps/${app.name}/package.json`)}'
        }`})
      break;
    case app.name.includes('api'):
      appConfig = Object.assign({}, app, {
        targetPath: (environment !== 'dev')
          ? './apps/api/src/environments/environment.prod.ts'
          : './apps/api/src/environments/environment.ts',
        envfile: `export const environment = {
          production: true,
          globalPrefix: 'api',
          host: process.env.HOST || '${HOST}',
          port: process.env.PORT || '${PORT}',
          tokenExpire: '${TOKEN_EXPIRE}',
          secretToken: '${SECRET_JWT}',
          // mongodb setting
          dbUser: process.env.DB_USER || '${DB_USER}',
          dbPwd: process.env.DB_PWD || '${DB_PWD}',
          dbBdd: process.env.DB_DDB || '${DB_DDB}',
          dbHost: process.env.DB_HOST || '${DB_HOST}',
          // redis setting
          redisHost: process.env.REDIS_SERVERS || '${REDIS_SERVERS}',
          redisPort: process.env.REDIS_PORT || '${REDIS_PORT}', 
          redisUser: process.env.REDIS_USER || '${REDIS_USER}',
          redisPwd: process.env.REDIS_PASS || '${REDIS_PASS}',
          mailer: {
            from: process.env.MAILER_FROM || '${MAILER_FROM}',
            replayTo: process.env.MAILER_REPLAYTO || '${MAILER_REPLAYTO}',
            user: process.env.MAILER_USER || '${MAILER_USER}',
            pass: process.env.MAILER_PASS || '${MAILER_PASS}',
            host: process.env.MAILER_HOST || '${MAILER_HOST}'
          },
          getDBHost: () => 'mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_DDB}',
          version: '${getVersion('./apps/api/package.json')}'
        };`
      });
      break;
    default: 
      appConfig = app;
  }
  return appConfig;
})];
// build env file for all projects
for (let index = 0; index < APPS.length; index++) {
  const a = APPS[index];
  fs.writeFile(a.targetPath, a.envfile,  (err: any) => {
    if (err) 
      return console.log(err);
    console.log(`[INFO] Build environment file for ${a.name} with success!`)
  });
}