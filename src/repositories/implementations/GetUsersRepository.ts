import { User } from '../../entities/user';
import { prisma } from '../../providers/prisma';
import { IGetUsersRepository } from '../IGetUsersRepository';

export class GetUsersRepository implements IGetUsersRepository {
  async get(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users;
  }
}
