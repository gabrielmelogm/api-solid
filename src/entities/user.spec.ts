import { User } from './user';

describe('Create user', () => {
  it('should be able create an user', () => {
    const user = new User({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    expect(user).toBeInstanceOf(User);
    expect(user.email).toEqual('johndoe@test.com');
  });

  it('should not be able create an user with invalid email', () => {
    expect(() => {
      return new User({
        name: 'John Doe',
        email: 'johndoe',
        password: '123456',
      });
    }).toThrow();
  });
});
