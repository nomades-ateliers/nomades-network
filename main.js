(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
const environment = {
    production: true,
    globalPrefix: 'api',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '',
    tokenExpire: '86400000',
    secretToken: '81Fx6B2B72F3C4F74B12&A6B89874',
    // mongodb setting
    dbUser: process.env.DB_USER || 'nomade',
    dbPwd: process.env.DB_PWD || 'nomade24',
    dbBdd: process.env.DB_DDB || 'nomades-test',
    dbHost: process.env.DB_HOST || 'ds038547.mlab.com:38547',
    // redis setting
    redisHost: process.env.REDIS_SERVERS || 'undefined',
    redisPort: process.env.REDIS_PORT || 'undefined',
    redisUser: process.env.REDIS_USER || 'undefined',
    redisPwd: process.env.REDIS_PASS || 'undefined',
    mailer: {
        from: process.env.MAILER_FROM || '',
        replayTo: process.env.MAILER_REPLAYTO || 'undefined',
        user: process.env.MAILER_USER || '',
        pass: process.env.MAILER_PASS || '',
        host: process.env.MAILER_HOST || ''
    },
    fronts: {
        pwa: 'https://nomades.world'
    },
    prefix: {
        confirmEmail: 'confirmEmail'
    },
    getDBHost: () => 'mongodb://' + (process.env.DB_USER || 'nomade') + ':' + (process.env.DB_PWD || 'nomade24') + '@' + (process.env.DB_HOST || 'ds038547.mlab.com:38547') + '/' + (process.env.DB_DDB || 'nomades-test'),
    version: '1.0.0-beta.1.0.8'
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XLSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var convert_excel_to_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var convert_excel_to_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(convert_excel_to_json__WEBPACK_IMPORTED_MODULE_3__);




let XLSService = class XLSService {
    constructor() { }
    readLocalFile(filePath) {
        try {
            const data = Object(fs__WEBPACK_IMPORTED_MODULE_2__["readFileSync"])(filePath, { encoding: 'utf-8' });
            return data;
        }
        catch (error) {
            throw new Error('unable to get version');
        }
    }
    excelToJson(sourceFile) {
        try {
            const result = convert_excel_to_json__WEBPACK_IMPORTED_MODULE_3__({
                sourceFile
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    normalize(jsonArray) {
        const [header, ...students] = jsonArray;
        return students.map(s => this.renameKeys(header, s));
    }
    renameKeys(keysMap, obj) {
        return Object.keys(obj).reduce((acc, key) => (Object.assign({}, acc, { [(keysMap[key] || key || '')
                .toLowerCase()
                .replace(/é/gi, "e")
                .replace(/è/gi, "e")
                .replace(/à/gi, "a")
                .replace(/\s/g, '_')]: obj[key] })), {});
    }
};
XLSService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], XLSService);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMAIL_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMailerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nest_modules_mailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
var _a;




const EMAIL_DEFAULT = {
    register: {
        to: null,
        from: null,
        subject: `[Nomades World] Confirmation d'inscription ✔`,
        text: (url) => `
      Bienvenu sur Nomades World.
      Veullez vous rendre sur cette adresse pour confirmer votre email et valider votre compte.
      ${url}
    `,
        html: (url) => `
      <p>
        Bienvenu sur Nomades World.<br/>
        Veullez vous rendre sur cette adresse pour confirmer votre email et valider votre compte.
      </p>
      <a href="${url}" target="_blank">
        confirmer mon compte Nomades World avec mon email.
      </a>
    `,
    },
    default: {
        to: 'nicolas@nomades.ch',
        from: _environments_environment__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].mailer.from,
        subject: `[Nomades World] Test: default subject`,
        text: `
      Default plain text
    `,
        html: `
      <p>
        Default HTML text
      </p>
    `,
    }
};
let AppMailerService = class AppMailerService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendMail(options = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { to = EMAIL_DEFAULT['default'].to, from = EMAIL_DEFAULT['default'].from, subject = EMAIL_DEFAULT['default'].subject, text = EMAIL_DEFAULT['default'].text, html = EMAIL_DEFAULT['default'].html, } = options || {};
            if (!from || !to) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('No sender or recever available to send email with Nestjs Mailer');
            }
            // console.log('to send--->', {to, from, subject, text, html});
            return yield this.mailerService
                .sendMail({ to, from, subject, text, html })
                .then(() => ({ result: true }))
                .catch((error) => ({ result: false, error }));
        });
    }
};
AppMailerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_2__["MailerService"] !== "undefined" && _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_2__["MailerService"]) === "function" ? _a : Object])
], AppMailerService);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getToken; });
/* unused harmony export extractToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirmEmailLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return editFileName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);



// app



/**
 * Methode to generate usertoken from value
 * @param secretToken string Secret String from backend to generate/verify user token
 * @param expire number TimeStampe of token expiration
 * @param doc any Object with value to generate user token
 */
const getToken = (secretToken = null, expire = null, doc = {}) => {
    // prevent unexisting value
    if (!doc.uid || !doc.email)
        return '';
    // prepare payload
    const payload = { uid: doc.uid, email: doc.email };
    // create new token with params
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["sign"](payload, secretToken, {
        expiresIn: +expire // use jwtExpire as number type
    });
};
/**
 * extractToken(): Method to safty extract usertoken from http request
 * @param req express.Request Request Class from Express JS
 */
const extractToken = (req) => {
    if (!req)
        return '';
    // extract data and prevent unexisting proprety `token`
    const { body = { token: null }, query = { token: null } } = req;
    // extract value from one of thoses
    const token = body.token ||
        query.token ||
        req.get('x-access-token') ||
        req.get('authentication') ||
        req.get('authorization') || null;
    // create arrray with empty value posible
    const maps = {
        'NaN': NaN,
        'null': null,
        'undefined': undefined,
        'Infinity': Infinity,
        '-Infinity': -Infinity
    };
    // return value empty or existing token finded
    return ((token in maps) ? maps[token] : token);
};
const checkAuthentication = (req) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    // look for the token in the incoming request:
    const token = extractToken(req);
    if (!token || token === undefined || token === 'undefined') {
        return null;
    }
    try {
        const decoded = yield jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["verify"](token, _environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].secretToken);
        req.decoded = decoded;
        return decoded;
    }
    catch (e) {
        return null;
    }
});
const confirmEmailLink = (uid) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](undefined, void 0, void 0, function* () {
    // get random id
    const id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
    // set data in redis with uniqu key and expire time
    yield _app_redis__WEBPACK_IMPORTED_MODULE_3__[/* redis */ "a"].set(_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].prefix.confirmEmail + id, uid, 'ex', 60 * 60 * 15);
    // return url ready to confirm email
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].fronts.pwa}/confirme?token=${id}`;
});
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = Object(path__WEBPACK_IMPORTED_MODULE_5__["extname"])(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `bdd-students${fileExtName}`);
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "APIResponse")) __webpack_require__.d(__webpack_exports__, "APIResponse", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["APIResponse"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__, "User")) __webpack_require__.d(__webpack_exports__, "User", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["User"]; });




/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@nest-modules/mailer");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { statusCode: 200, message: 'Welcome to api!' };
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return redis; });
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var ioredis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ioredis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


const redis = new ioredis__WEBPACK_IMPORTED_MODULE_0__({
    port: +_environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].redisPort,
    host: _environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].redisHost,
    password: _environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].redisPwd
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var _app_redis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _services_xls_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
var _a, _b, _c, _d;





// libs

// app





;
let UsersService = class UsersService {
    constructor(authModel, userModel, _mailerService, _xls) {
        this.authModel = authModel;
        this.userModel = userModel;
        this._mailerService = _mailerService;
        this._xls = _xls;
    }
    _resetSave({ auth, currentUser }) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (auth)
                yield this.authModel.findByIdAndDelete({ _id: auth._id }).catch(err => err);
            if (currentUser)
                yield this.userModel.findByIdAndDelete({ _id: currentUser._id }).catch(err => err);
        });
    }
    _comparePassword(docPassword, password) {
        if (!docPassword) {
            return false;
        }
        return bcryptjs__WEBPACK_IMPORTED_MODULE_2__["compareSync"](password, docPassword);
    }
    login(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // handle params errors
            if (!data || !data.email || !data.password)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]();
            const currentUser = yield this.userModel.findOne({ email: data.email }).catch(err => err);
            if (!currentUser || !currentUser.uid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]('User not exite. Try other email.');
            // find user pwd into Auths.Collection
            const { password = null } = yield this.authModel.findOne({ _id: currentUser.uid }).catch(err => err);
            // compar Password
            if (!this._comparePassword(password, data.password))
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ForbiddenException"]('Password not valid!');
            // generate token
            const token = Object(_app_utils__WEBPACK_IMPORTED_MODULE_6__[/* getToken */ "d"])(_environments_environment__WEBPACK_IMPORTED_MODULE_7__[/* environment */ "a"].secretToken, 60 * 1000, currentUser);
            return {
                statusCode: 200,
                message: 'User loged',
                currentUser,
                token
            };
        });
    }
    create(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const created = {};
            if (!data.email || !data.password)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]();
            // generate pwd hash
            let hash = '';
            try {
                hash = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hashSync"](data.password, 10);
            }
            catch (err) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"](err, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
            // create data in Auth Collection
            const auth = yield new this.authModel({
                email: data.email,
                password: hash
            }).save().catch(err => err);
            if (!auth._id || auth instanceof Error)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"](auth.errmsg || auth);
            // memory save auth
            created.auth = auth;
            // delete secure key
            delete data.verified;
            // create User in User Collection
            let currentUser = yield new this.userModel(new _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_5__["User"](Object.assign({}, data, { uid: auth._id }))).save().then(res => res.toObject()).catch(err => err);
            // handle error    
            if (!currentUser._id || currentUser instanceof Error) {
                this._resetSave(created);
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"](currentUser.errmsg || currentUser);
            }
            created.currentUser = currentUser;
            // update user with existing data from students list
            currentUser = yield this._checkExistingStudent(currentUser);
            // send email to Super admin to confirm new created user
            // TODO: create logic
            const _a = yield this._sendEmail({
                subject: _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* EMAIL_DEFAULT */ "b"]['register'].subject,
                html: `
        <p>
          Nouvelle inscription sur <i>"nomades.world"</i><br/>
          Utilisateur: ${currentUser.firstname} ${currentUser.lastname} 
          Email de connection: ${currentUser.email}
        </p>
        <p>
          Cliquez ici pour authoriser cet utilisateur à consulter "nomades.world": <a href="https://node29887-env-5468118.jcloud-ver-jpc.ik-server.com/api/users/authorize/${currentUser._id}?user=nomades&action=authorize">authoriser cet utilisateur</a>
        </p>
      `
            }).catch(err => err), { result: resultSuperAdmin = false } = _a, errorSuperAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["result"]);
            if (!resultSuperAdmin || resultSuperAdmin instanceof Error) {
                this._resetSave(created);
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]((errorSuperAdmin) ? errorSuperAdmin : resultSuperAdmin.errmsg || resultSuperAdmin);
            }
            // send email to created user to explaine confirm flow
            // create url confirmation
            const url = yield Object(_app_utils__WEBPACK_IMPORTED_MODULE_6__[/* confirmEmailLink */ "b"])(currentUser._id);
            // defin value for email
            const subject = _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* EMAIL_DEFAULT */ "b"]['register'].subject;
            const html = _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* EMAIL_DEFAULT */ "b"]['register'].html(url);
            const text = _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* EMAIL_DEFAULT */ "b"]['register'].text(url);
            // send email using private method
            const _b = yield this._sendEmail({
                to: currentUser.email, subject, html, text
            }).catch(err => err), { result: resultUser = false } = _b, errorUser = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_b, ["result"]);
            // handle error
            if (!resultUser || resultUser instanceof Error) {
                this._resetSave(created);
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]((errorUser) ? errorUser : resultUser.errmsg || resultUser);
            }
            // generate token
            const token = Object(_app_utils__WEBPACK_IMPORTED_MODULE_6__[/* getToken */ "d"])(_environments_environment__WEBPACK_IMPORTED_MODULE_7__[/* environment */ "a"].secretToken, 60 * 1000, currentUser);
            // return response
            return { statusCode: 200, currentUser, token };
        });
    }
    getCurrentUser(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // return {currentUser: null, statusCode: 200}
            const currentUser = yield this._getByUID(uid); //.catch(err => err);
            if (!currentUser.authorized)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"](`Nous n'avons pas encore authorizer votre compte. Veuillez reésayer de vous connecter plus tard.`);
            if (!currentUser.verified)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ForbiddenException"](`Vous n'avez pas encore confirmer votre compte. Veuillez consulter vos email et suivre les instructions que nous vous avons envoyée.`);
            return { statusCode: 200, currentUser };
        });
    }
    getAllUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const users = yield this._getAll(); //.catch(err => err);
            return { statusCode: 200, users };
        });
    }
    getUserById(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this._getByID(id).catch(err => err);
            if (!user || user instanceof Error)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            return { statusCode: 200, users: [user] };
        });
    }
    searchUsers(query) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!query) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('you have to provide a query to search users');
            }
            const users = yield this.userModel.aggregate([
                {
                    $project: {
                        firstname: { $toLower: "$firstname" },
                        lastname: { $toLower: "$lastname" },
                        email: { $toLower: "$email" }
                    }
                },
                {
                    $match: {
                        $or: [
                            { firstname: new RegExp(query) },
                            { lastname: new RegExp(query) },
                            { email: new RegExp(query) }
                        ]
                    }
                }
            ]);
            return {
                statusCode: 200,
                message: 'Query search: ' + query,
                users
            };
        });
    }
    _getAll() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const users = yield this.userModel.find()
                .then(res => (res && res.length > 0)
                ? res.map(i => i.toObject())
                : res).catch(err => err);
            if (!users)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            return users;
        });
    }
    _getByID(_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.userModel.findOne({ _id }).then(res => (res) ? res.toObject() : res).catch(err => err);
            if (!user)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            return user;
        });
    }
    _getByUID(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.userModel.findOne({ uid }).then(res => (res) ? res.toObject() : res).catch(err => err);
            if (!user)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            return user;
        });
    }
    update(data, requestUID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const findUser = yield this.userModel.findOne({ _id: data._id }).then(res => (res) ? res.toObject() : res).catch(err => err);
            if (!findUser)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            if (requestUID.toString() !== findUser.uid.toString())
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ForbiddenException"]('User ID not match');
            const currentUser = yield this.userModel.findOneAndUpdate({
                _id: data._id
            }, { $set: new _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_5__["User"](Object.assign({}, findUser, data)) }, { new: true, runValidators: true }).exec()
                .then(res => (res) ? res.toObject() : res)
                .catch(err => err);
            // handle error
            if (!currentUser || !currentUser._id || currentUser instanceof Error)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"](currentUser.errmsg || currentUser.message || currentUser, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
            return { statusCode: 200, currentUser };
        });
    }
    confirmEmail(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // get user id from redis DB
            const _id = yield _app_redis__WEBPACK_IMPORTED_MODULE_9__[/* redis */ "a"].get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__[/* environment */ "a"].prefix.confirmEmail}${id}`);
            // handle unexisting user _id
            if (!_id) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]();
            }
            // update user with verified: true
            yield this.userModel.updateOne({ _id }, { verified: true }).catch(err => err);
            // delet redis key
            yield _app_redis__WEBPACK_IMPORTED_MODULE_9__[/* redis */ "a"].del(`${_environments_environment__WEBPACK_IMPORTED_MODULE_7__[/* environment */ "a"].prefix.confirmEmail}${id}`);
            // send basic response
            return { statusCode: 200, message: 'User confirm with success' };
        });
    }
    authorizeUser(_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // update user with verified: true
            yield this.userModel.updateOne({ _id }, { authorized: true }).catch(err => err);
            // send basic response
            return { statusCode: 200, message: 'User authorized with success' };
        });
    }
    _sendEmail(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // only run in production
            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_7__[/* environment */ "a"].production)
                return { result: true };
            // handle test user creation
            if (options &&
                options.to &&
                options.to.includes('demo'))
                return { result: true };
            // send email confirmation
            const _a = yield this._mailerService.sendMail(options).catch(err => err), { result = false } = _a, errorSendEmail = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["result"]);
            // handle result error
            if (!result) {
                console.error('Unable to send email to new user');
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"](errorSendEmail, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
            // returtn result as object
            return { result };
        });
    }
    _checkExistingStudent(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const students = yield new Promise((resolve, reject) => {
                try {
                    const result = this._xls.excelToJson(__dirname + '/assets/bdd-students.xlsx');
                    const sheet = Object.keys(result)[0];
                    const data = this._xls.normalize(result[sheet]);
                    resolve(data);
                }
                catch (error) {
                    reject(error);
                }
            });
            console.log('-----', students);
            if (!students || students.length <= 0)
                return user;
            // search existing user in students list
            const find = students.find(s => (s.nom || '').toLowerCase() === user.lastname.toLowerCase() &&
                (s.prenom || '').toLowerCase() === user.firstname.toLowerCase());
            // handle unexisting user
            if (!find)
                return user;
            // update user with existing data
            const objectReady = {
                email: user.email,
                firstname: find.prenom || user.firstname,
                lastname: find.nom || user.lastname,
                contact: {
                    street: find.adresse || (user.contact || { street: null }).street,
                    zipCode: find.code_postal || (user.contact || { zipCode: null }).zipCode,
                    city: find.ville || (user.contact || { city: null }).city,
                    country: find.pays || (user.contact || { country: null }).country
                },
                mobile_phone: find.mobile || user.mobile_phone,
                bday: find.date_de_naissance || user.bday,
                student_number: find.numero_eleve || user.student_number,
                student_year: find.numero_annee || user.student_year,
                trainings: []
            };
            // add existing trainings data
            if (find && find.dmm)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Digital Marketing Manager',
                        cerfifiedState: find.dmm,
                        created: new Date()
                    }];
            if (find && find.wd)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Web Designer',
                        cerfifiedState: find.wd,
                        created: new Date()
                    }];
            if (find && find.wpr)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Web Programmer',
                        cerfifiedState: find.wpr,
                        created: new Date()
                    }];
            if (find && find.mwad)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Mobile Web Application Developper',
                        cerfifiedState: find.mwad,
                        created: new Date()
                    }];
            if (find && find.wdev)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Web Developper',
                        cerfifiedState: find.wdev,
                        created: new Date()
                    }];
            if (find && find.drupal)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Drupal',
                        cerfifiedState: find.drupal,
                        created: new Date()
                    }];
            if (find && find.symfony)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Symfony',
                        cerfifiedState: find.symfony,
                        created: new Date()
                    }];
            if (find && find.webpublisher)
                objectReady.trainings = [...objectReady.trainings, {
                        name: 'Web Publisher',
                        cerfifiedState: find.webpublisher,
                        created: new Date()
                    }];
            // request db to update user object updated
            const currentUser = yield this.userModel.findOneAndUpdate({ _id: user._id }, objectReady, { new: true, runValidators: true }).exec()
                .then(res => (res) ? res.toObject() : res)
                .catch(err => err);
            // handle error
            if (!currentUser || !currentUser._id || currentUser instanceof Error)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"](currentUser.errmsg || currentUser.message || currentUser, _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
            // return result user updated
            console.log('updated user with data from student list: ', currentUser);
            return currentUser;
        });
    }
};
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])('Auth')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_3__["InjectModel"])('User')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_4__["Model"]) === "function" ? _b : Object, typeof (_c = typeof _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* AppMailerService */ "a"] !== "undefined" && _services_mailer_service__WEBPACK_IMPORTED_MODULE_8__[/* AppMailerService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _services_xls_service__WEBPACK_IMPORTED_MODULE_10__[/* XLSService */ "a"] !== "undefined" && _services_xls_service__WEBPACK_IMPORTED_MODULE_10__[/* XLSService */ "a"]) === "function" ? _d : Object])
], UsersService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userTrainingSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userTrainingSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: {
        type: String,
        required: true
    },
    cerfifiedState: Number,
    certifiedProject: String,
    certifiedProjectUrl: String,
    created: {
        type: Date,
        default: new Date()
    },
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_api_schemas__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_api_schemas__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (checked) */ if(__webpack_require__.o(_users__WEBPACK_IMPORTED_MODULE_0__, "APIResponse")) __webpack_require__.d(__webpack_exports__, "APIResponse", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["APIResponse"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_users__WEBPACK_IMPORTED_MODULE_0__, "User")) __webpack_require__.d(__webpack_exports__, "User", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["User"]; });




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _users_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _users_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_users_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_users_interface__WEBPACK_IMPORTED_MODULE_0__, "APIResponse")) __webpack_require__.d(__webpack_exports__, "APIResponse", function() { return _users_interface__WEBPACK_IMPORTED_MODULE_0__["APIResponse"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_users_interface__WEBPACK_IMPORTED_MODULE_0__, "User")) __webpack_require__.d(__webpack_exports__, "User", function() { return _users_interface__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _users_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _users_model__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 23 */
/***/ (function(module, exports) {

;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
class User {
    constructor(params) {
        Object.assign(this, params);
    }
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_schema__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user_schema__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _user_training_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_training_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _user_skill_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);



const authSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    password: {
        type: String,
        required: true,
        // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        index: true
    }
});
const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    uid: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.ObjectId,
        ref: 'auths',
        required: true,
        index: true
    },
    avatar: String,
    email: {
        type: String,
        required: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        unique: true,
        index: true
    },
    lastname: {
        type: String,
        required: true,
        minlength: 1
    },
    firstname: {
        type: String,
        require: true,
        minlength: 1
    },
    contact: {
        street: String,
        street2: String,
        street_number: String,
        zipCode: String,
        city: String,
        state: String,
        country: String,
        countryCode: String,
        default: String,
    },
    created: {
        type: Date,
        required: false,
        default: new Date()
    },
    desc: String,
    job: String,
    bday: Date,
    student_number: Number,
    student_year: Number,
    mobile_phone: String,
    skills: [_user_skill_schema__WEBPACK_IMPORTED_MODULE_2__[/* userSkillSchema */ "a"]],
    trainings: [_user_training_schema__WEBPACK_IMPORTED_MODULE_1__[/* userTrainingSchema */ "a"]],
    // authorization control
    verified: Boolean,
    authorized: Boolean // admin activation
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nest_modules_mailer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _services_xls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var _authorization_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var _features_users_users_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);





// app





// app/features

const PROTECTED_ROUTES = [
    {
        path: '/users',
        method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].GET
    },
    {
        path: '/users/isAuth',
        method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].GET
    },
    {
        path: '/users/search',
        method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].GET
    },
    {
        path: '/users/:id',
        method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].PUT
    },
    {
        path: '/users/:id',
        method: _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].GET
    }
];
const mongooseOptions = {
    // fix mongoose deprecated warning
    // doc: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(_authorization_middleware__WEBPACK_IMPORTED_MODULE_9__[/* AuthorizationMiddleware */ "a"])
            .forRoutes(...PROTECTED_ROUTES);
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_8__[/* environment */ "a"].getDBHost(), mongooseOptions),
            // MongooseModule.forRootAsync({
            //   useFactory: () => {
            //     console.log('check db url connection: -------', environment.getDBHost());
            //     return <MongooseModuleOptions>{
            //       uri: environment.getDBHost(),
            //       useNewUrlParser: true,
            //       useUnifiedTopology: true,
            //       useCreateIndex: true,
            //     }
            //   },
            // }),
            _nest_modules_mailer__WEBPACK_IMPORTED_MODULE_3__["MailerModule"].forRootAsync({
                useFactory: () => ({
                    transport: `smtps://${_environments_environment__WEBPACK_IMPORTED_MODULE_8__[/* environment */ "a"].mailer.user}:${_environments_environment__WEBPACK_IMPORTED_MODULE_8__[/* environment */ "a"].mailer.pass}@${_environments_environment__WEBPACK_IMPORTED_MODULE_8__[/* environment */ "a"].mailer.host}`,
                }),
            }),
            _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__["MulterModule"].register({
                dest: __dirname + '/assets',
            }),
            _features_users_users_module__WEBPACK_IMPORTED_MODULE_10__[/* UsersModule */ "a"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_5__[/* AppController */ "a"]],
        providers: [
            _app_service__WEBPACK_IMPORTED_MODULE_6__[/* AppService */ "a"],
            _services_xls_service__WEBPACK_IMPORTED_MODULE_7__[/* XLSService */ "a"]
        ]
    })
], AppModule);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_xls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
var _a, _b, _c, _d;




// libs

// app





class FileUploadDto {
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_7__["ApiProperty"])({ type: 'string', format: 'binary' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FileUploadDto.prototype, "file", void 0);
let AppController = class AppController {
    constructor(appService, _xls) {
        this.appService = appService;
        this._xls = _xls;
    }
    welcome() {
        return this.appService.getData();
    }
    getEnv(user, password) {
        return (user === 'webmaster-fazio' && password === 'debug')
            ? Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_6__[/* environment */ "a"]) : { version: _environments_environment__WEBPACK_IMPORTED_MODULE_6__[/* environment */ "a"].version };
    }
    getData() {
        return this.appService.getData();
    }
    uploadedFile(file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = this._xls.excelToJson(file.path);
            const sheet = Object.keys(result)[0];
            const students = this._xls.normalize(result[sheet]);
            return { status: 200, message: 'Success import student database', students };
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(''),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_a = typeof _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_4__["APIResponse"] !== "undefined" && _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_4__["APIResponse"]) === "function" ? _a : Object)
], AppController.prototype, "welcome", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('env'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('user')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('password')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], AppController.prototype, "getEnv", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_b = typeof _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_4__["APIResponse"] !== "undefined" && _nomades_network_api_interfaces__WEBPACK_IMPORTED_MODULE_4__["APIResponse"]) === "function" ? _b : Object)
], AppController.prototype, "getData", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('upload_bdd'),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_7__["ApiConsumes"])('multipart/form-data'),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_7__["ApiBody"])({
        description: 'Student exel bdd',
        type: FileUploadDto,
    }),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(Object(_nestjs_platform_express__WEBPACK_IMPORTED_MODULE_2__["FileInterceptor"])('file', {
        storage: Object(multer__WEBPACK_IMPORTED_MODULE_3__["diskStorage"])({
            destination: __dirname + '/assets',
            filename: _app_utils__WEBPACK_IMPORTED_MODULE_9__[/* editFileName */ "c"],
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(xlsx)$/)) {
                return callback(new Error('Only xlsx files are allowed!'), false);
            }
            callback(null, true);
        }
    })),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UploadedFile"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
], AppController.prototype, "uploadedFile", null);
AppController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_c = typeof _app_service__WEBPACK_IMPORTED_MODULE_5__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_5__[/* AppService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _services_xls_service__WEBPACK_IMPORTED_MODULE_8__[/* XLSService */ "a"] !== "undefined" && _services_xls_service__WEBPACK_IMPORTED_MODULE_8__[/* XLSService */ "a"]) === "function" ? _d : Object])
], AppController);



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("convert-excel-to-json");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);


// app

let AuthorizationMiddleware = class AuthorizationMiddleware {
    use(req, res, next) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isAuth = yield Object(_app_utils__WEBPACK_IMPORTED_MODULE_2__[/* checkAuthentication */ "a"])(req);
            if (!isAuth)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]('You need to be authenticated to access this part of the API');
            next();
        });
    }
};
AuthorizationMiddleware = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthorizationMiddleware);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nomades_network_api_schemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _services_xls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);



// libs

// app




let UsersModule = class UsersModule {
};
UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: 'User', schema: _nomades_network_api_schemas__WEBPACK_IMPORTED_MODULE_3__[/* userSchema */ "b"] },
                { name: 'Auth', schema: _nomades_network_api_schemas__WEBPACK_IMPORTED_MODULE_3__[/* authSchema */ "a"] }
            ])
        ],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_4__[/* UsersService */ "a"], _services_mailer_service__WEBPACK_IMPORTED_MODULE_6__[/* AppMailerService */ "a"], _services_xls_service__WEBPACK_IMPORTED_MODULE_7__[/* XLSService */ "a"]],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_5__[/* UsersController */ "a"]]
    })
], UsersModule);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userSkillSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSkillSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: {
        type: String,
        required: true
    },
    level: Number
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;



// app


let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(req) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // check token
            const user = req.decoded;
            // handle error
            if (!user || !user.uid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]();
            // return response    
            return this.userService.getAllUser();
        });
    }
    isAuth(req) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // check token
            const user = req.decoded;
            // handle error
            if (!user || !user.uid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]();
            // return response
            return this.userService.getCurrentUser(user.uid);
        });
    }
    searchUsers(req, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // check token
            const user = req.decoded;
            // handle error
            if (!user || !user.uid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]();
            if (!value)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]('No query in request', 404);
            // return response    
            return this.userService.searchUsers(value.toLowerCase());
        });
    }
    confirmEmail(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.userService.confirmEmail(id);
        });
    }
    authorizeUser(id, user, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!id)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('incorrect params');
            if (!user || user !== 'nomades')
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('incorrect params');
            if (!action || action !== 'authorize')
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('incorrect params');
            return this.userService.authorizeUser(id);
        });
    }
    getById(req, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // check token
            const user = req.decoded;
            // handle error
            if (!user || !user.uid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]();
            if (!id)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]('No user id in request', 404);
            // return response    
            return this.userService.getUserById(id);
        });
    }
    login(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // handle error
            if (!email || !password)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Invalide request parameters');
            // return response
            return yield this.userService.login({ email, password });
        });
    }
    create(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // handle error
            if (!user || !user.email || !user.password)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Invalide request parameters');
            // return response
            return yield this.userService.create(Object.assign({}, user));
        });
    }
    update(user, req) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // check token
            const userToken = req.decoded;
            // handle error
            if (!user || !user._id)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('Invalide request parameters');
            // return response
            return yield this.userService.update(user, userToken.uid);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(''),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _a : Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UsersController.prototype, "getAllUsers", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('isAuth'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _c : Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UsersController.prototype, "isAuth", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('search'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('query')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_e = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _e : Object, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "searchUsers", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/confirm/:id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "confirmEmail", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/authorize/:id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('user')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])('action')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UsersController.prototype, "authorizeUser", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(':id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_j = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _j : Object, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], UsersController.prototype, "getById", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('login'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('email')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('password')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], UsersController.prototype, "login", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], UsersController.prototype, "create", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(':id'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_o = typeof Partial !== "undefined" && Partial) === "function" ? _o : Object, typeof (_p = typeof express__WEBPACK_IMPORTED_MODULE_2__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_2__["Request"]) === "function" ? _p : Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", typeof (_q = typeof Promise !== "undefined" && Promise) === "function" ? _q : Object)
], UsersController.prototype, "update", null);
UsersController = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_4__["ApiTags"])('users'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('users'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [typeof (_r = typeof _users_service__WEBPACK_IMPORTED_MODULE_3__[/* UsersService */ "a"] !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_3__[/* UsersService */ "a"]) === "function" ? _r : Object])
], UsersController);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);




let ErrorsInterceptor = class ErrorsInterceptor {
    constructor() { }
    intercept(context, next) {
        const call$ = next.handle();
        return call$.pipe(
        // tap(() => console.log('INTERCEPT after: ', statusCode)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            // console.log('INTERCEPT after error: ', error, error.statusCode )
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
};
ErrorsInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorsInterceptor);



/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpExceptionFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




const isString = (value) => lodash__WEBPACK_IMPORTED_MODULE_1__["isString"](value);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        // console.log('YYYYY', exception);
        // get executing ctx
        const ctx = host.switchToHttp();
        // get response
        const response = ctx.getResponse();
        // get request
        const request = ctx.getRequest();
        // get handle status
        const status = exception instanceof _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["HttpException"]
            ? exception.getStatus()
            : _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["HttpStatus"].INTERNAL_SERVER_ERROR;
        // get error options
        let error = exception instanceof _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["HttpException"]
            ? exception.getResponse()
            : null;
        if (!error && exception && exception.message)
            error = exception.message;
        if (!error && exception && exception.error)
            error = exception.error;
        // extract message from error
        const msg = (isString(error))
            ? error
            : (error || { message: null }).message ||
                (error || { error: null }).error ||
                (error || { error: { message: null } }).error.message ||
                'error server';
        // formating data response
        const data = {
            status,
            message: msg,
            path: request.url,
            userToken: request.decoded,
            method: request.method,
            options: {
                body: request.body,
                query: request.query,
            },
            timestamp: new Date().toISOString(),
            debug: !_environments_environment__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].production ? exception.stack : null,
        };
        return response.status(status).jsonp(data);
    }
};
HttpExceptionFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Catch"])()
], HttpExceptionFilter);



/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERCEPTORS", function() { return INTERCEPTORS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _app_app_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var _app_app_errors_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);








const INTERCEPTORS = [
    new _app_app_error_interceptor__WEBPACK_IMPORTED_MODULE_6__[/* ErrorsInterceptor */ "a"]()
];
function bootstrap() {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_4__[/* AppModule */ "a"]);
        const { globalPrefix = null } = _environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"];
        app.setGlobalPrefix(globalPrefix);
        // app.use(helmet());
        // app.use(compression());
        app.use(body_parser__WEBPACK_IMPORTED_MODULE_2__["json"]({ limit: '1mb' }));
        app.use(body_parser__WEBPACK_IMPORTED_MODULE_2__["urlencoded"]({ extended: true }));
        // app.use(rateLimit({ max: 1000, windowMs: 15 * 60 * 1000 }));
        app.enableCors();
        // http error filter
        app.useGlobalFilters(new _app_app_errors_filter__WEBPACK_IMPORTED_MODULE_7__[/* HttpExceptionFilter */ "a"]());
        // add global interceptors
        app.useGlobalInterceptors(...INTERCEPTORS);
        // buid api doc
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["DocumentBuilder"]()
            .setTitle('Nomades Network API Endpoint')
            .setDescription('Nomades Network Server API documentation')
            .setVersion(_environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].version)
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].setup(globalPrefix, app, document);
        // start server api
        const { port = null } = _environments_environment__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"];
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map