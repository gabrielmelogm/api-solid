import { User } from "../../entities/user";
import { prisma } from "../../providers/prisma";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  }

  async create(user: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: user,
    });

    return newUser;
  }
}
