export interface AccountManager {
  addAccount(request: AccountManager.AddRequest): Promise<void>;
  getAccount(
    request: AccountManager.GetAccountRequest
  ): Promise<AccountManager.GetAccountResponse>;
  updateAccountBalance(
    request: AccountManager.UpdateAccountBalanceRequest
  ): Promise<boolean>;
}

export namespace AccountManager {
  export type AddRequest = {
    userId: number;
    accountName: string;
    accountBalance: number;
  };

  export type GetAccountRequest = {
    userId: number;
    accountId: number;
  };

  export type GetAccountResponse = {
    accountId: number;
    userId: number;
    accountBalance: number;
    accountName: string;
  };

  export type UpdateAccountBalanceRequest = {
    userId: number;
    accountId: number;
    value: number;
  };
}
