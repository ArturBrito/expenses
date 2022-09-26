import { unauthorized } from '@/libs/ddd/base-classes/helpers/http-helper';
import { AddAccountRepository } from '../contracts/db/add-account-repository';
import { AddMovementRepository } from '../contracts/db/add-movement-repository';
import { GetAccountByUserAndIdRepository } from '../contracts/db/get-account-repository';
import { MovementManager } from '../contracts/movement-manager';

export class DbAddMovement implements MovementManager {
  constructor(
    private readonly addMovementRepository: AddMovementRepository,
    private readonly getAccountByUserAndId: GetAccountByUserAndIdRepository
  ) {}

  async addMovement(request: MovementManager.Request): Promise<boolean> {
    const account = await this.getAccountByUserAndId.getAccount(request);

    if (account) {
      await this.addMovementRepository.addMovement(request);
      return true;
    }
    return false;
  }
}
