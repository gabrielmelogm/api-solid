import supertest from 'supertest';
import { app } from '../../app';

describe('[E2E] - Create user', () => {
  it('should be able create an user', async () => {
    const response = await supertest(app).post('/users').send({
      name: 'John Doe',
      email: 'johnzinho@email.com',
      password: '123456',
    });

    expect(response.status).toBe(201);
  });
});
