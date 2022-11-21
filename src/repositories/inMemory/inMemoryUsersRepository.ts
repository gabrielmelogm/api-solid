import { v4 } from 'uuid';
import { User } from '../../entities/user';
import { IUsersRepository } from '../IUsersRepository';

export class InMemoryUserRepository implements IUsersRepository {
  public users = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async getAll(): Promise<User[]> {
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

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
