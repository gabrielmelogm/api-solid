import { User } from '../entities/user';

export interface IGetUsersRepository {
  get(): Promise<User[]>;
}
