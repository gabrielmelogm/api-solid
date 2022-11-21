import { User } from '../../entities/user';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type GetUserResponse = User[];

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<GetUserResponse> {
    const users = await this.usersRepository.getAll();
    return users;
  }
}
