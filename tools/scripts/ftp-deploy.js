// var dotenv = require("dotenv");
// dotenv.config();
// var FtpDeploy = require("ftp-deploy");
// var ftpDeploy = new FtpDeploy();
 
// let user, password, host, localRoot;
// console.log('[DEPLOY FTP]: ', process.env.APP);
// switch (true) {
//     case process.env.APP === 'passpoly' :
//         user = process.env.PWA_FTP_USER || '';
//         password = process.env.PWA_FTP_PWD || '';
//         host = process.env.PWA_FTP_HOST || '';
//         localRoot = process.env.PWA_FTP_ROOT || '';
//         remoteRoot = process.env.PWA_FTP_REMOTE || '';

//         var config = {
//             user,
//             password,
//             host,
//             port: 21,
//             localRoot,
//             remoteRoot,
//             include: ["*", "**/*", ".*"],      // this would upload everything except dot files
//             // include: ["*.php", "dist/*", ".*"],
//             // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
//             exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
//             // delete ALL existing files at destination before uploading, if true
//             deleteRemote: true,
//             // Passive mode is forced (EPSV command is not sent)
//             forcePasv: true
//         };
         
//         // use with promises
//         ftpDeploy.deploy(config)
//             .then(res => console.log("finished: ", res))
//             .catch(err => console.log('Error: ', err));
         
//         break;
//     default:
//         break;
// }
