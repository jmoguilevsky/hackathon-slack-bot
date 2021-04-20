import { NextFunction, Request, Response } from "express";
import * as errors from "http-errors";
import logger from "../utils/logger";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function errorHandlingMiddleware(err: Error, req: Request, res: Response, _: NextFunction): void {
  logger.error(err.stack);

  const error = errors.isHttpError(err) ? err : new errors[(err as any)?.status || 500]();

  res.status(error.status).json({
    status: error.status,
    name: error.name,
    message: error.message,
    details: (err as any)?.errors,
  });
}
