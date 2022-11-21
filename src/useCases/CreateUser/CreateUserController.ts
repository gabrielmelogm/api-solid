import { NextFunction, Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const { name, email, password } = request.body;

    try {
      const userResponse = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send(userResponse);
    } catch (error: any) {
      return next(error);
    }
  }
}
