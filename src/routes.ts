import { Router, Request, Response } from "express";
import { CreateUserController } from "./Controllers/user/CreateUserController";
const router = Router();

router.post('/users', new CreateUserController().handle)
export { router };