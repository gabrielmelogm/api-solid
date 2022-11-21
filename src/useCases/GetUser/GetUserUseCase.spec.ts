import { InMemoryUserRepository } from '../../repositories/inMemory/inMemoryUsersRepository';
import { GetUserUseCase } from './GetUserUseCase';

describe('Get list of users', () => {
  it('should be able get all users', () => {
    const users = new InMemoryUserRepository();
    const sut = new GetUserUseCase(users);

    expect(sut.execute()).resolves;
  });
});
