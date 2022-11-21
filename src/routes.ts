import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { getUserController } from './useCases/GetUser';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Hello World' }));

router.post('/users', (request, response) =>
  createUserController.handle(request, response)
);

router.get('/users', (request, response) =>
  getUserController.handle(request, response)
);

export { router };
