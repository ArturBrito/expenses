import { Decrypter } from '@/core/authentication/contracts/cryptography/decrypter';
import { HttpResponse } from '@/libs/ddd/base-classes/controllers';
import { AccessDeniedError } from '@/libs/ddd/base-classes/errors/access-denied-error';
import {
  forbidden,
  ok,
  serverError,
  unauthorized,
} from '@/libs/ddd/base-classes/helpers/http-helper';
import { Middleware } from '@/libs/ddd/base-classes/protocols/middleware';

export class AuthMiddleware implements Middleware {
  constructor(private readonly decrypter: Decrypter) {}

  async exec(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = request;
      
      if (accessToken) {
        const decryptedToken = await this.decrypter.decrypt(accessToken);

        if (decryptedToken) {
          return ok({ userId: decryptedToken.userId });
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error) {
      if (error.message === 'jwt expired') return unauthorized();
      return serverError(error);
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string;
  };
}
