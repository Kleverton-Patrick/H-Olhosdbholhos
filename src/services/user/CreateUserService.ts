import prismaClient from "../../prisma";
interface UserRequest {
    name: string;
    email: string;
    cpf: string;
    descricao: string;
}

class CreateUserService {
    async execute({ name, email, cpf, descricao }: UserRequest) {
        //Aqui verifica se o email já cadastrado
        const userJaExiste = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        //Aqui verificar se o email não foi enviado no body
        if (!email) {
            throw new Error("E-mail é obrigatório")
        }
        //Aqui verifica se o email está duplicado no banco de dados
        if (userJaExiste) {
            throw new Error("Paciente já Cadastrado")
        }
        const user = await prismaClient.user.create(
            {
                data: {
                    name: name,
                    email: email,
                    cpf: cpf,
                    descricao: descricao
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    cpf: true,
                    descricao: true
                }
            }
        )
        return user
    }
}
export { CreateUserService } 