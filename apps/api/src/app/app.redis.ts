import * as Redis from 'ioredis';
import { environment } from '../environments/environment';

export const redis = new Redis({
  port: +environment.redisPort,
  host: environment.redisHost,
  password: environment.redisPwd
});