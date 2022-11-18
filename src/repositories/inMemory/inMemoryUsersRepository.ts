import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUserRepository implements IUsersRepository {
  public users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return user;
    } else {
      return null;
    }
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
