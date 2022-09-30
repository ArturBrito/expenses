import { AccountManager } from '../account-manager';

export interface UpdateAccountBalanceRepository {
  update(request: UpdateAccountBalanceRepository.Request): Promise<boolean>;
}

export namespace UpdateAccountBalanceRepository {
  export type Request = AccountManager.UpdateAccountBalanceRequest;
}
