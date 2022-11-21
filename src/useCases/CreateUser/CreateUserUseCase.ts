import { User } from "../../entities/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequest } from "./CreateUserRequest";

type CreateUserResponse = User;

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserRequest): Promise<CreateUserResponse> {
    if (!data.name || !data.email || !data.password) {
      throw new Error("Missing data");
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.usersRepository.create(user);
    return user;
  }
}
