import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello World" }));

router.post("/users", (request, response) =>
  createUserController.handle(request, response)
);

export { router };
