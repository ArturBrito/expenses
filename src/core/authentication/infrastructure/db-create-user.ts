import { CreateUserRepository } from "../contracts/db/create-user-repository";
import { UserCreater } from "../contracts/user-creater";

export class DbCreateUser implements UserCreater{
    constructor(private readonly createUserRepository: CreateUserRepository){}

    async create(name: string, email: string, password: string): Promise<void> {
        await this.createUserRepository.createUser(name, email, password)
    }

}