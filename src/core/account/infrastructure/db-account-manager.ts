import { AccountManager } from '../contracts/account-manager';
import { AddAccountRepository } from '../contracts/db/add-account-repository';
import { GetAccountByUserAndIdRepository } from '../contracts/db/get-account-repository';

export class DbAccountManager implements AccountManager {
  constructor(
    private readonly addAccountRepository: AddAccountRepository,
    private readonly getAccountByUserAndIdRepository: GetAccountByUserAndIdRepository
  ) {}

  async addAccount(request: AccountManager.AddRequest): Promise<void> {
    return await this.addAccountRepository.addAccount(request);
  }

  async getAccount(
    request: AccountManager.GetAccountRequest
  ): Promise<AccountManager.GetAccountResponse> {
    return await this.getAccountByUserAndIdRepository.getAccount(request);
  }
}
