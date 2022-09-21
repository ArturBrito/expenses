export interface AccountManager {
  add(request: AccountManager.Request): Promise<void>;
}

export namespace AccountManager {
  export type Request = {
    userId: number;
    accountName: string;
    balance: number;
  };
}
