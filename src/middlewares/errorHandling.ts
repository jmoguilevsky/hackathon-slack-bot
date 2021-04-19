import { Request, Response, NextFunction } from 'express';
import * as errors from 'http-errors';
import logger from '../utils/logger';

export default function errorHandlingMiddleware(err: Error, req: Request, res: Response, _: NextFunction) {
  logger.error(err.stack);

  const error = errors.isHttpError(err) ? err : new errors[(err as any).status || 500]();

  res.status(error.status).json({
    status: error.status,
    name: error.name,
    message: error.message,
    details: (err as any).errors
  });
}
