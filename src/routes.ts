import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';
import { createUserController } from './useCases/CreateUser';
import { getUserController } from './useCases/GetUser';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello World' }));

router.post('/users', (request, response, next) =>
  createUserController.handle(request, response, next)
);

router.get('/users', (request, response, next) =>
  getUserController.handle(request, response, next)
);

router.use((error, req, res, next) =>
  new ErrorMiddleware().handle(error, req, res, next)
);

export { router };
