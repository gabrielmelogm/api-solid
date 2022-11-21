import { v4 } from 'uuid';
import { User } from '../../entities/user';
import { IGetUsersRepository } from '../IGetUsersRepository';

export class InMemoryGetUserRepository implements IGetUsersRepository {
  public users = [];

  async get(): Promise<User[]> {
    const usersList = [
      {
        id: v4(),
        name: 'John Doe',
        email: 'jonhdoe1@email.com',
        password: '123456',
      },
      {
        id: v4(),
        name: 'John Doe 2',
        email: 'jonhdoe2@email.com',
        password: '123456',
      },
      {
        id: v4(),
        name: 'John Doe 3',
        email: 'jonhdoe3@email.com',
        password: '123456',
      },
    ];
    this.users.push(usersList);
    return usersList;
  }
}
