import { User } from '../../entities/user';
import { IGetUsersRepository } from '../../repositories/IGetUsersRepository';

type GetUserResponse = User[];

export class GetUserUseCase {
  constructor(private usersRepository: IGetUsersRepository) {}

  async execute(): Promise<GetUserResponse> {
    const users = await this.usersRepository.get();
    return users;
  }
}
