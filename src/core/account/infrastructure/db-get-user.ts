import { GetUserRepository } from '@/core/authentication/contracts/db/get-user-repository';
import { GetUser } from '@/core/authentication/contracts/get-user';

export class DbGetUser implements GetUser {
  constructor(private readonly getUserRepository: GetUserRepository) {}

  async get(userId: number): Promise<boolean> {
    return await this.getUserRepository.get(userId);
  }
}
