import { Middleware } from '@/libs/protocols/middleware';
import { NextFunction, Request, Response } from 'express';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    
    const request = {
      accessToken: req.headers?.['x-access-token'],
      ...(req.headers || {}),
    };
    const httpResponse = await middleware.exec(request);
    
    if (httpResponse.statusCode === 200) {
      Object.assign(req.body, httpResponse.body);
      
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message,
      });
    }
  };
};
