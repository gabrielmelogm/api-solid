import { User } from '../entities/user';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  getAll(): Promise<User[]>;
  create(user: User): Promise<User>;
}
