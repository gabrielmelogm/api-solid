import { describe, expect, it } from 'vitest';
import { InMemoryGetUserRepository } from '../../repositories/inMemory/inMemoryGetUserRepository';
import { GetUserUseCase } from './GetUserUseCase';

describe('Get list of users', () => {
  it('should be able get all users', () => {
    const users = new InMemoryGetUserRepository();
    const sut = new GetUserUseCase(users);

    expect(sut.execute()).resolves;
  });
});
