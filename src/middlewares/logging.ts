import logger from '../utils/logger';
import { Request, Response, NextFunction } from 'express';

export default function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
  // Log incoming request
  logger.info(`=> ${req.method} ${req.path} ${req.ip}`);

  // Monkey-patch response so it logs itself on the way out
  const end = res.end.bind(res);
  res.end = (): void => {
    const log = res.statusCode < 400 ? logger.info : res.statusCode < 500 ? logger.warn : logger.error;
    log(`<= ${req.method} ${req.path} ${res.statusCode} [${req.headers["user-agent"]}] ${req.ip}`)
    return end();
  }

  next();
}
