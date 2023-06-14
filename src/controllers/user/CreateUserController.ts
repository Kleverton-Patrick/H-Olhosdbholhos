import { Request, response, Response } from "express";
import { CreateUserService } from '../../Services/user/CreateUserService'
class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, cpf, descricao } = req.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,
            email,
            cpf,
            descricao
        });

        return res.json(user);
    }
}
export { CreateUserController } 