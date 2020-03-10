import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
// app
import { redis } from './app.redis';
import { environment } from '../environments/environment';

/**
 * Methode to generate usertoken from value
 * @param secretToken string Secret String from backend to generate/verify user token
 * @param expire number TimeStampe of token expiration
 * @param doc any Object with value to generate user token
 */
export const getToken = (
  secretToken = null,
  expire = null,
  doc: any = {}
): string => {
  // prevent unexisting value
  if (! doc.uid || !doc.email) return '';
  // prepare payload
  const payload = {uid: doc.uid, email: doc.email};
  // create new token with params
  return jwt.sign(payload, secretToken, {
    expiresIn: +expire // use jwtExpire as number type
  });
};

/**
 * extractToken(): Method to safty extract usertoken from http request
 * @param req express.Request Request Class from Express JS
 */
export const extractToken = (req: Request): string => {
  if (!req) return '';
  // extract data and prevent unexisting proprety `token`
  const {body = {token: null}, query = {token: null}} = req;
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

export const checkAuthentication = async (req: Request) => {
  // look for the token in the incoming request:
  const token = extractToken(req);
  if (!token || token === undefined || token === 'undefined') {
    return null;
  }
  try {
    const decoded = await jwt.verify(token, environment.secretToken);
    (req as any).decoded = decoded;
    return decoded;
  } catch (e) {
    return null;
  }
}


export const confirmEmailLink = async (uid: string): Promise<string> => {
  // get random id
  const id = v4();
  // set data in redis with uniqu key and expire time
  await redis.set(environment.prefix.confirmEmail + id, uid, 'ex', 60 * 60 * 15);
  // return url ready to confirm email
  return `${environment.fronts.pwa}/confirme?token=${id}`;
};
