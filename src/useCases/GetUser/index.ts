import { GetUsersRepository } from '../../repositories/implementations/GetUsersRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const usersRepository = new GetUsersRepository();

const getUserUserCase = new GetUserUseCase(usersRepository);

const getUserController = new GetUserController(getUserUserCase);

export { getUserUserCase, getUserController };
