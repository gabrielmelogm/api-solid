import { v4 } from "uuid";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    if (!id) {
      this.id = v4();
    }

    if (!props.email.includes("@")) {
      throw new Error("Invalid email");
    }

    Object.assign(this, props);
  }
}
