import { AccountManager } from '../contracts/account-manager';
import { AddAccountRepository } from '../contracts/db/add-account-repository';
import { GetAccountByUserAndIdRepository } from '../contracts/db/get-account-repository';
import { UpdateAccountBalanceRepository } from '../contracts/db/update-account-balance-repository';

export class DbAccountManager implements AccountManager {
  constructor(
    private readonly addAccountRepository: AddAccountRepository,
    private readonly getAccountByUserAndIdRepository: GetAccountByUserAndIdRepository,
    private readonly updateAccountBalanceRepository: UpdateAccountBalanceRepository
  ) {}

  async addAccount(request: AccountManager.AddRequest): Promise<void> {
    return await this.addAccountRepository.addAccount(request);
  }

  async getAccount(
    request: AccountManager.GetAccountRequest
  ): Promise<AccountManager.GetAccountResponse> {
    return await this.getAccountByUserAndIdRepository.getAccount(request);
  }

  async updateAccountBalance(
    request: AccountManager.UpdateAccountBalanceRequest
  ): Promise<boolean> {
    return await this.updateAccountBalanceRepository.update(request);
  }
}
