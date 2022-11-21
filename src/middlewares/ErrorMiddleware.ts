import { Request, Response, NextFunction } from 'express';

export class ErrorMiddleware {
  async handle(error: any, req: Request, res: Response, next: NextFunction) {
    switch (error?.message) {
      case 'Missing data':
        res.status(422).json({ error: error?.message });
        break;
      case 'Invalid email':
        res.status(422).json({ error: error?.message });
        break;
      case 'User already exists':
        res.status(400).json({ error: error?.message });
        break;
      default:
        res.status(500).json({ error: 'Unexpected error' });
        break;
    }
  }
}
