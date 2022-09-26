import { AccountManager } from '../account-manager';

export interface GetAccountByUserAndIdRepository {
  getAccount(request: AddMovementRepository.Request): Promise<AddMovementRepository.Response>;
}

export namespace AddMovementRepository {
  export type Request = AccountManager.GetAccountRequest;
  export type Response = AccountManager.GetAccountResponse;
}
