import { GetUser } from '@/core/authentication/contracts/get-user';
import { Validation } from '@/core/authentication/contracts/validation';
import { Controller, HttpResponse } from '@/libs/controllers';
import { AccessDeniedError } from '@/libs/errors/access-denied-error';
import {
  badRequest,
  forbidden,
  ok,
  serverError,
} from '@/libs/helpers/http-helper';
import { AccountManager } from '../contracts/account-manager';

export class CreateAccountController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly getUser: GetUser,
    private readonly accountManager: AccountManager
  ) {}

  async exec(request: any): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const validUser = await this.getUser.get(request.userId);

      if (!validUser) {
        return forbidden(new AccessDeniedError());
      }

      await this.accountManager.addAccount(request);

    
      return ok('Account added');
    } catch (e) {
      console.log(e);
      return serverError(e);
    }
  }
}
