import { UsersRemover } from '../contracts/users-remover';
import { RemoveAllUsersRepository } from '../contracts/db/remove-all-users-repository';

export class DbUsersRemover implements UsersRemover {
  constructor(
    private readonly removeAllUsersRepository: RemoveAllUsersRepository
  ) {}

  async remove(): Promise<void> {
    await this.removeAllUsersRepository.removeAllUsers();
  }
}
