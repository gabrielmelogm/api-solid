import { describe, expect, it } from "vitest";
import { User } from "../../entities/user";
import { InMemoryUserRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe("Create user", () => {
  it("should be able create an user", () => {
    const user = new InMemoryUserRepository();
    const sut = new CreateUserUseCase(user);

    expect(
      sut.execute({
        name: "John Doe",
        email: "johndoe@test.com.br",
        password: "123456",
      })
    ).resolves.toBeInstanceOf(User);
  });
});
