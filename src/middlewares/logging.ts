import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type chunkType = any; // This is defined as `any` by Express already
type endCb = () => void | undefined;
type endArgs = [endCb?] | [chunkType, endCb?] | [chunkType, BufferEncoding, endCb?];

export default function loggingMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Log incoming request
  logger.info(`=> ${req.method} ${req.path} ${req.ip}`);

  // Monkey-patch response so it logs itself on the way out
  const end = res.end.bind(res);
  res.end = (...args: endArgs): void => {
    const log = res.statusCode < 400 ? logger.info : res.statusCode < 500 ? logger.warn : logger.error;
    log(`<= ${req.method} ${req.path} ${res.statusCode} [${req.headers["user-agent"]}] ${req.ip}`);
    return end(...args);
  };

  next();
}
