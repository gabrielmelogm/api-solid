import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { GetUserController } from './GetUserController';
import { GetUserUseCase } from './GetUserUseCase';

const usersRepository = new UsersRepository();

const getUserUserCase = new GetUserUseCase(usersRepository);

const getUserController = new GetUserController(getUserUserCase);

export { getUserUserCase, getUserController };
