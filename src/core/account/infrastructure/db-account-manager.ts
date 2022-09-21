import { AccountManager } from '../contracts/account-manager';
import { AddAccountRepository } from '../contracts/db/add-account-repository';

export class DbAccountManager implements AccountManager {
  constructor(private readonly addAccountRepository: AddAccountRepository) {}

  async add(request: AccountManager.Request): Promise<void> {
    return await this.addAccountRepository.add(request);
  }
}
