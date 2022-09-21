export interface AddAccountRepository{
    add(request: AddAccountRepository.Request): Promise<void>
}

export namespace AddAccountRepository {
    export type Request = {
      userId: number;
      accountName: string;
      balance: number;
    };
  }
  