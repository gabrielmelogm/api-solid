import { Request, Response } from 'express';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const userResponse = await this.getUserUseCase.execute();
      return response.send(userResponse);
    } catch (error) {
      return response.status(400).json({
        message: error?.message || 'Unexpected error',
      });
    }
  }
}
