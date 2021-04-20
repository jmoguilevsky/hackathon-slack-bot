import { Request, Response, NextFunction } from "express";

type HandlerWithNext<T> = (req: Request, res: Response, next: NextFunction) => T;
type Handler<T> = (req: Request, res: Response) => T;
export function asyncHandler(fn: Handler<Promise<void>>): HandlerWithNext<void> {
  return (req: Request, res: Response, next: NextFunction) => fn(req, res).then(next).catch(next);
}
