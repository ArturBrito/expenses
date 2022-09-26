import { AccountManager } from "../account-manager"

export interface AddAccountRepository{
    addAccount(request: AddAccountRepository.Request): Promise<void>
}

export namespace AddAccountRepository {
    export type Request = AccountManager.AddRequest
  }
  