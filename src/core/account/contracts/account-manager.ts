export interface AccountManager {
  addAccount(request: AccountManager.AddRequest): Promise<void>;
  getAccount(request: AccountManager.GetAccountRequest): Promise<AccountManager.GetAccountResponse>
}

export namespace AccountManager {
  export type AddRequest = {
    userId: number;
    accountName: string;
    balance: number;
  };

  export type GetAccountRequest = {
    userId: number;
    accountId: number;
  }

  export type GetAccountResponse = {
    accountId: number,
    userId: number,
    balance: number,
    accountName: string
  }
}
